import { useState, useEffect} from "react";
import './styles.css'

export function Fetching(stockName) {
    const [result, setResult] = useState();
    
    useEffect(() => {
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockName}&apikey=2J57KNNIMXDUFFAG`)
        .then(response => response.json())
        .then(data => setResult(data['Global Quote']))
    }, [stockName])

    if (!result){
        return (<div className='stockLoading'><h2>Loading...</h2></div>)
    }

    return(
        <div className='stockInfo'>
            <h1>{result['01. symbol']}</h1>
            <h2>Open: {+result['02. open']}</h2>
            <h2>High: {+result['03. high']}</h2>
            <h2>Low: {+result['04. low']}</h2>
            <h2>Price: {+result['05. price']}</h2>
            <h2>Volume: {+result['06. volume']}</h2>
            <h2>Change: {result['10. change percent']}</h2>
        </div>
    )
} 