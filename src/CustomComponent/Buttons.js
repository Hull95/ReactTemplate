import React from "react";
import {
  BsSearch,
  BsPlusCircle,
  BsXCircle,
  BsPencil,
  BsArrowLeft,
  BsArrowRight,
  BsArrowUpDown,
} from "react-icons/bs";

export const ButtonSearch = () => {
  return (
    <>
      <button className="btn rounded">
        <BsSearch className="font-size-20" />
      </button>
    </>
  );
};

export const ButtonCancel = () => {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-1 col-xl-1">
        <button className="btn rounded primary-color-3">
          <BsXCircle className="font-size-20" />
        </button>
      </div>
    </>
  );
};

export const ButtonAdd = () => {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-1 col-xl-1">
        <button className="btn rounded">
          <BsPlusCircle className="font-size-20" />
        </button>
      </div>
    </>
  );
};

export const ButtonEdit = () => {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-1 col-xl-1">
        <button className="btn rounded">
          <BsPencil className="font-size-20" />
        </button>
      </div>
    </>
  );
};

export const ButtonArrowLeft = () => {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-1 col-xl-1">
        <button className="btn rounded">
          <BsArrowLeft className="font-size-20" />
        </button>
      </div>
    </>
  );
};

export const ButtonArrowRight = () => {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-1 col-xl-1">
        <button className="btn rounded">
          <BsArrowRight className="font-size-20" />
        </button>
      </div>
    </>
  );
};

export const ButtonArrowTableSort = () => {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-1 col-xl-1">
        <button className="btn rounded">
          <BsArrowUpDown className="font-size-20" />
        </button>
      </div>
    </>
  );
};
