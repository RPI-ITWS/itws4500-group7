import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function SelectState() {
    const [records, setRecords] = useState([]);
    const [form, setForm] = useState({
        name: "",
        position: "",
        level: "",
        api: "0",
    });
    const navigate = useNavigate();

    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:3000/api/windVel`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setRecords(records);
        }

        getRecords();

        return;
    }, [records.length]);

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };
        console.log(newPerson);

        //setForm({ name: "", title: "", born: "", api: "0" });
        //navigate("/");
    }

    // This following section will display the form that takes the input from the user.
    return (
        <div>
            <h3>Select a State</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="api">API</label>
                    <select
                        className="form-control"
                        id="api"
                        value={form.api}
                        onChange={(e) => updateForm({ api: e.target.value })}
                    >
                        <option value="0">Select</option>
                        {() => {
                            var i = 0;
                            console.log(records);
                            return records.map((record) => {
                                console.log(record);
                                return (
                                    <option
                                        value={i++}
                                    >{record[0].states[i-1].name}</option>
                                );
                            });
                        }}
                    </select>
                </div>
                <br />
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create person"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}