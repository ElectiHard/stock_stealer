import { useState, useEffect} from "react";
import './styles.css'

export function Fetching(stockName) {
    const [result, setResult] = useState();
    
    useEffect(() => {
        fetch(`https://api.twelvedata.com/quote?symbol=${stockName}&apikey=5f8631e6596645a29af45b7f2a74f194`)
        .then(response => response.json())
        .then(data => setResult(data))
    }, [stockName])

    if (!result){
        return (<div className='stockLoading'><h2>Loading...</h2></div>)
    }

    return(
        <div className='stockInfo'>
            <h1>{result.symbol}</h1>
            <div className='list'>
                <li>Open: {+result.open}</li>
                <li>High: {+result.high}</li>
                <li>Low: {+result.low}</li>
                <li>Price: {+result.close}</li>
                <li>Volume: {+result.volume}</li>
                <li>Change: {+result.change}%</li>
            </div>
        </div>
    )
} 