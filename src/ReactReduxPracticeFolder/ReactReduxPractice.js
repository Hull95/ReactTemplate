import React, {useEffect, useState} from 'react';
import {Form, Table} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {CreateNewWord, DeleteWordFromArray, GetAllWord} from "../action/englishWords";
import {useDispatch, useSelector} from "react-redux";

export const ReactReduxPractice = () => {
    const dispatch = useDispatch();
    const {register, errors, handleSubmit, reset} = useForm();
    const [searchField, setSearchField] = useState("");

    const allWords = useSelector((state) => state.getAllWords);


    const filteredPersons = allWords.data.filter(
        person => {
            return (
                person
                    .eng_word
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                person
                    .srb_word
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    const onSubmit = (data) => {
        dispatch(CreateNewWord(data));
        reset({
            eng_word: "",
            srb_word: ""
        })
        window.location.reload();
    };

    const handleDeleteWord = (id) => {
        console.log(id)
        dispatch(DeleteWordFromArray(id))
    }

    useEffect(() => {
        dispatch(GetAllWord());
    }, []);


    return (
        <>
            <div className={"container text-center pt-3"}>
                <div className={"row"}>
                    <div className={"col-12 col-md-12 col-lg-12 col-xl-12 text-center"}>
                        <h1>English words list</h1>
                    </div>
                </div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row pt-3">
                        <label className="col-sm-4 col-form-label text-right font-weight-bold text-uppercase">Enter new
                            word: </label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                ref={register({required: true})}
                                id="eng_word"
                                name="eng_word"
                                autoFocus
                            />
                        </div>
                        {errors.eng_word && errors.eng_word.type === "required" && (
                            <div className="text-right">
                                <small role="alert" className="sv-form-field-required">
                                    Field is required!
                                </small>
                            </div>
                        )}
                    </div>
                    <div className="form-group row pt-3">
                        <label className="col-sm-4 col-form-label text-right font-weight-bold text-uppercase">Enter
                            translate: </label>
                        <div className="col-sm-4">
                            <input
                                type="text"
                                className="form-control"
                                ref={register({required: true})}
                                id="srb_word"
                                name="srb_word"
                            />
                        </div>
                        {errors.srb_word && errors.srb_word.type === "required" && (
                            <div className="text-right">
                                <small role="alert" className="sv-form-field-required">
                                    Field is required!
                                </small>
                            </div>
                        )}
                    </div>
                    <div className="row pt-3 pb-5">
                        <div className="col-sm-4 m-auto">
                            <button type={"submit"} className={"btn btn-success w-100"}>Add new word
                            </button>
                        </div>
                    </div>
                </Form>
                <div className={"row"}>
                    <div className={"col-12 col-md-12 col-lg-3 col-xl-3"}>
                        <input
                            type="text"
                            className="form-control"
                            value={searchField}
                            onChange={handleChange}
                            id="search"
                            name="search"
                            placeholder={"Search..."}
                        />
                    </div>
                </div>
                <div className={"row pt-3"}>
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>Broj</th>
                            <th>Engleski</th>
                            <th>Srpski</th>
                            <th>Akcija</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredPersons.map((item, key) => (
                            <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.eng_word}</td>
                                <td>{item.srb_word}</td>
                                <td>
                                    <button className={"btn btn-danger"} onClick={handleDeleteWord}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>

                </div>
            </div>
        </>
    );
};



