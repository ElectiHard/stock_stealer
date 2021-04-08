import { useState, useEffect, Fragment } from "react";
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';




export function Graphs({ stockName }) {
    const [result, setResult] = useState();

    useEffect(() => {
        if (stockName !== "") {
            fetch(`https://api.twelvedata.com/time_series?symbol=${stockName}&interval=1day&apikey=5f8631e6596645a29af45b7f2a74f194&outputsize=100`)
                .then(response => response.json())
                .then(data => setResult(data))
        }
    }, [stockName])

    if (!result) {
        return null;
    }
    return (
        <Fragment>
            <AreaChart width={730} height={250} data={result.values.reverse()}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="datetime" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="close" fill="#e2b714" stroke="#e2b714" fillOpacity={0.8} strokeWidth={2} dot={false}/>
            </AreaChart>
        </Fragment>
    )
}