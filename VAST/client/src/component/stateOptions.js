import React, { Component } from "react";

export default class StateOptions extends Component {
    render() {
        const records = this.props.records;
        console.log(records);
        return records.map((record, i) => {
            return (
                <option
                    value={i + 1}
                >{record.name}</option>
            );
        })
    };
}