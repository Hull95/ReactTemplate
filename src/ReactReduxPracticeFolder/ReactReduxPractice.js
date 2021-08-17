import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../action";

export const ReactReduxPractice = () => {
    const dispatch = useDispatch();

    const content = useSelector((state) => state.getDataForm);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    useEffect(() => {
        dispatch(getData());
    }, []);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    React.useEffect(() => {
        const results = content.data.filter(person =>
            person.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm,content]);

    return (
    <>
        <div className={"container text-center pt-3"}>
            <h1>Komponenta 1</h1>
        </div>
        <div className={"container"}>
            <div className={"form-row"}>
                <div className={"col-12 col-md-3 col-lg-3 p-3"}>
                    <input className={"form-control"} value={searchTerm} onChange={handleChange}/>
                </div>
            </div>

        </div>
        <div className={"container"}>
            <div className={"form-row"}>
                {searchResults.map((item, key) => (
                    <div className={"col-12 col-md-3 col-3 p-3"}>
                        <div className="card" key={key}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </>
    );
};



