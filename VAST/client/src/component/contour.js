import React, { useRef, useState, useEffect } from "react";
import * as d3 from "d3";
import { _3d } from 'd3-3d';
import { select, namespace, event, selection } from 'd3-selection';
import Plot from "./plot";

export default function Contour() {
    const [records, setRecords] = useState([]);
    const [month, setMonth] = useState(1);
    const [alpha, setAlpha] = useState(Math.PI/2);
    const [beta, setBeta] = useState(0);
    const prevMonthRef = useRef();
    useEffect(() => {
        if (prevMonthRef.current != month) {
            async function getRecords() {
                const response = await fetch(`http://localhost:3000/api/windVel`);

                if (!response.ok) {
                    const message = `An error occurred: ${response.statusText}`;
                    window.alert(message);
                    return;
                }

                const record = await response.json();
                setRecords(record[month].data.result);
            }

            getRecords();
            prevMonthRef.current = month;
            return;
        }
    }, [month]);

    useEffect(() => {
        if (records.length>0) {
            return (
                <div>
                    <button type="button" onClick={(e) => incrementMonth(e)}>Next</button>
                    <button type="button" onClick={(e) => rotateUp(e)}>Rotate Up</button>
                    <button type="button" onClick={(e) => rotateDown(e)}>Rotate Down</button>
                    <button type="button" onClick={(e) => rotateLeft(e)}>Rotate Left</button>
                    <button type="button" onClick={(e) => rotateRight(e)}>Rotate Right</button>
                    <Plot data={records} alpha={alpha} beta={beta} />
                </div>
            );
        }
    }, [alpha, beta]);

    if (records.length>0) {
        return (
            <div>
                <button type="button" onClick={(e) => incrementMonth(e)}>Next</button>
                <button type="button" onClick={(e) => rotateUp(e)}>Rotate Up</button>
                <button type="button" onClick={(e) => rotateDown(e)}>Rotate Down</button>
                <button type="button" onClick={(e) => rotateLeft(e)}>Rotate Left</button>
                <button type="button" onClick={(e) => rotateRight(e)}>Rotate Right</button>
                <Plot data={records} alpha={alpha} beta={beta} />
            </div>
        );
    }

    function rotateUp(e) {
        e.preventDefault();
        if(alpha < Math.PI) {
            setAlpha(alpha + 10*Math.PI/180);
        }
        console.log(alpha);
    }

    function rotateDown(e) {
        e.preventDefault();
        if(alpha > 0) {
            setAlpha(alpha - 10*Math.PI/180);
        }
        console.log(alpha);
    }

    function rotateLeft(e) {
        e.preventDefault();
        if(beta < Math.PI) {
            setBeta(beta + 10*Math.PI/180);
        }
        console.log(beta);
    }

    function rotateRight(e) {
        e.preventDefault();
        if(beta > 0) {
            setBeta(beta - 10*Math.PI/180);
        }
        console.log(beta);
    }

    function decrementMonth(e) {
        e.preventDefault();
        if (month == 1) {
            setMonth(12);
        } else {
            setMonth(month - 1);
        }
    }

    function incrementMonth(e) {
        e.preventDefault();
        if (month == 12) {
            setMonth(1);
        } else {
            setMonth(month + 1);
        }
    }
};