import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({ placeholder, data }) {
    const [filtered, setFiltered] = useState([]);
    const [words, setWords] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWords(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFiltered([]);
        } else {
            setFiltered(newFilter);
        }
    };

    const clearInput = () => {
        setFiltered([]);
        setWords("");
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={words}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {filtered.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {filtered.length !== 0 && (
                <div className="dataResult">
                    {filtered.slice(0, 15).map((value, key) => {
                        return (
                            <a className="dataItem" href={value.link} rel="noreferrer" target="_blank">
                                <p>{value.title} </p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;