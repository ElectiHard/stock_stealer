import React, { useState, Fragment} from "react";
import { Fetching } from "./fetching";
import { Graphs } from "./graphs";
import './styles.css'


export function Searchbar({suggestions}){
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [finalSearch, setFinalSearch] = useState("");

    const onChange = e => {
        const userInput = e.currentTarget.value;
        const filter = suggestions.filter(suggestion =>
        suggestion.toString().toLowerCase().indexOf(userInput.toLowerCase()) > -1);
        setActiveSuggestion(0);
        setFilteredSuggestions(filter);
        setShowSuggestions(true);
        setUserInput(e.currentTarget.value);
    }

    const onClick = e => {
        setActiveSuggestion(0);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
        //setUserInput(e.currentTarget.innerText);
        setFinalSearch(e.currentTarget.innerText.split(" ")[0]);
        setUserInput("");
    }

    const onKeyDown = e => {
        if (e.key === 'Enter'){
            setActiveSuggestion(0);
            setShowSuggestions(false);
            setUserInput(filteredSuggestions[activeSuggestion]);
            setFinalSearch(filteredSuggestions[activeSuggestion].split(" ")[0]);
            //setUserInput("")
        }
        else if (e.key === 'ArrowUp'){
            if (activeSuggestion === 0) {
                return;
            }
            setActiveSuggestion(activeSuggestion - 1)
        }
        else if (e.key === 'ArrowDown'){
            if (activeSuggestion === 5) {
                return;
            }
            setActiveSuggestion(activeSuggestion + 1)
        }
    }

    let suggestionsListComponent;

    if (showSuggestions && userInput){
        if (0 < filteredSuggestions.length){
            suggestionsListComponent = (
                <ul className="suggestions">
                    {filteredSuggestions.map((suggestion, index) => {
                        let className;
                        if (index === activeSuggestion) {
                            className = "suggestion-active";
                        }
                        if (index !== activeSuggestion) {
                            className = "suggestion-inactive";
                        }
                        return (
                            <li className={className} key={suggestion} onClick={onClick}>
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>
            );
        } 
        else {
            suggestionsListComponent = (
              <ul className="no-suggestions">
                    <li>
                      No suggestions for "{userInput}"
                    </li>
  
              </ul>
            );
        }
    }

    return (
        <Fragment>
            <div className='wrapper'>
                <div className='header'>
                    <div className='siteHeader'>stock stealer thing...</div>
                    <div className="inputSection">
                    <input
                        //maxLength = "50"
                        placeholder = "Search for stocks..."
                        type="search"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                    />
                    {suggestionsListComponent}
                    </div>
                </div>
                <div className="stockSection">
                    {Fetching(finalSearch)}
                </div>
                <div className="graphSection">
                    <Graphs stockName={finalSearch}/>
                </div>
            </div>
        </Fragment>
    );
}