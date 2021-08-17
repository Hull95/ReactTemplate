import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import {useForm} from "react-hook-form";

const ReactFormExample = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({});
    const [result, setResult] = useState("");
    const onSubmit = (data) => {
        setResult(JSON.stringify(data));
        console.log(data)
    }
    console.log(result)

    const validateName = async value => {
        if (value === "Stef") return true;
        return false;
    }

    return (
        <>
            <div className={"container"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={"form-row pt-3 justify-content-center"}>
                        <div className={"col-12 col-md-3 col-lg-3"}>
                            <input
                                ref={register({required: true, validate: validateName})}
                                name={"name"}
                                className={"form-control"}
                                placeholder="Name"/>
                            {errors.name && "Name is required"}
                        </div>
                    </div>
                    <div className={"form-row pt-3 justify-content-center"}>
                        <div className={"col-12 col-md-3 col-lg-3"}>
                            <input
                                ref={register}
                                name={"lastname"}
                                className={"form-control"}
                                placeholder="Last name"/>
                        </div>
                    </div>
                    <div className={"form-row pt-3 justify-content-center"}>
                        <div className={"col-12 col-md-3 col-lg-3"}>
                            <input type="submit" className={"btn btn-success w-100"}/>
                        </div>
                    </div>

                </form>
            </div>
        </>
    );
};

export default ReactFormExample;
