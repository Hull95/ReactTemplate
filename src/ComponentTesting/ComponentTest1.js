import React, { useEffect, useState } from "react";
import TitlePage from "../CustomComponent/TitlePage";
import {
  ButtonAdd,
  ButtonCancel,
  ButtonEdit,
  ButtonSearch,
  ButtonArrowRight,
  ButtonArrowLeft,
  ButtonArrowTableSort,
} from "../CustomComponent/Buttons";
import {
  FileFields,
  InputField,
  SearchField,
  TextAreaField,
  ChecboxField,
  RangeField,
  DateField,
  TimeField,
  PasswordField,
} from "../CustomComponent/Fields";

const ComponentTest1 = () => {
  const [valueField, setValueField] = useState(true);
  return (
    <>
      <div className="container">
        <TitlePage nameTitle={"Buttons and component"} />
        <div className="row mt-3 mb-3">
          <div className="col-12 col-md-12 col-lg-5 col-xl-5">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-12 col-md-12 col-lg-1 col-xl-1">
            <ButtonSearch />
          </div>
          <div className="col-12 col-md-12 col-lg-1 col-xl-1">
            <ButtonCancel />
          </div>
          <div className="col-12 col-md-12 col-lg-1 col-xl-1">
            <ButtonAdd />
          </div>
          <div className="col-12 col-md-12 col-lg-1 col-xl-1">
            <ButtonEdit />
          </div>
          <div className="col-12 col-md-12 col-lg-1 col-xl-1">
            <ButtonArrowLeft />
          </div>
          <div className="col-12 col-md-12 col-lg-1 col-xl-1">
            <ButtonArrowRight />
          </div>
          <div className="col-12 col-md-12 col-lg-1 col-xl-1">
            <ButtonArrowTableSort />
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-12 col-md-12 col-lg-10 col-xl-10">
            <InputField nameField="Name" typeField="text" />
            <InputField nameField="Number" typeField="number" />
            <SearchField nameField="Search" typeField="search" />
            <FileFields nameField="File" typeField="file" />
            <ChecboxField typeField="checkbox" nameField="Checkbox" />
            <RangeField typeField="range" nameField="Range" />
            <DateField typeField="date" nameField="Date" />
            <TimeField typeField="time" nameField="Time" />
            <PasswordField typeField="password" nameField="Password" />
          </div>
          <div className="col-12 col-md-12 col-lg-6 col-xl-6"></div>
        </div>
      </div>
    </>
  );
};

export default ComponentTest1;
