import { useState, useEffect, Fragment } from "react";
import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from 'recharts';





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
            <AreaChart width={window.innerHeight *0.6} height ={300} data={result.values.reverse()}
                margin={{ top: 15, right: 40, left: 20, bottom: 5 }}>
                <XAxis dataKey="datetime" />
                <YAxis allowDataOverflow= "false" type="number" allowDecimals = "true" interval = "preserveStart" tickCount = "5"  />
                <Tooltip />
                <Legend iconSize="14"/>
                <Area type="monotone" dataKey="close" fill="#e2b714" stroke="#e2b714" fillOpacity={0.8} strokeWidth={2} dot={false}/>
            </AreaChart>
        </Fragment>

    )
}