import React, { useState, Fragment} from "react";
import { Fetching } from "./fetching";
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
        setUserInput(e.currentTarget.innerText);
    }

    const onKeyDown = e => {
        if (e.key === 'Enter'){
            setActiveSuggestion(0);
            setShowSuggestions(false);
            setUserInput(filteredSuggestions[activeSuggestion]);
            let a = (filteredSuggestions[activeSuggestion].split(" "));
            setFinalSearch(a[0]);
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
            <div className="no-suggestions">
              <em>No suggestions available.</em>
            </div>
          );
        }
    }

    return (
        <Fragment>
            <div className='wrapper'>
                <div className='header'>
                    <h1>stock stealer thing</h1>
                    <h2>type to see stocks</h2>
                    <input
                        type="text"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    {suggestionsListComponent}
                </div>
                <div className="stockSection">
                {Fetching(finalSearch)}
                </div>
            </div>
        </Fragment>
    );
}