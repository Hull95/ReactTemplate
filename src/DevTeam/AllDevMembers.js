import React, { useEffect, useState } from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import ShowAll from "./ShowAll";
import { useDispatch, useSelector } from "react-redux";
import { getDataProfile } from "../action/profileActionData";

function AllDevMembers() {
  const [showFront, setShowFront] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [showAllData, setShowAll] = useState(true);

  const previewProfileData = useSelector((state) => state.getDataFormProfile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataProfile());
  }, [dispatch]);

  return (
    <>
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4 col-xl-4">
            <button
              className="btn btn-danger circle w-50"
              onClick={() => {
                setShowFront(!showFront);
                setShowBack(false);
                setShowAll(false);
              }}>
              Frontend
            </button>
          </div>
          <div className="col-12 col-md-12 col-lg-4 col-xl-4">
            <button
              className="btn btn-danger circle w-50"
              onClick={() => {
                setShowBack(!showBack);
                setShowFront(false);
                setShowAll(false);
              }}>
              Backend
            </button>
          </div>
          <div className="col-12 col-md-12 col-lg-4 col-xl-4">
            <button
              className="btn btn-danger circle w-50"
              onClick={() => {
                setShowAll(!showAllData);
                setShowFront(false);
                setShowBack(false);
              }}>
              Show all
            </button>
          </div>
        </div>
      </div>

      {showFront && <Frontend dataParentToChild={previewProfileData} />}
      {showBack && <Backend dataParentToChild={previewProfileData} />}
      {showAllData && <ShowAll dataParentToChild={previewProfileData} />}
    </>
  );
}

export default AllDevMembers;
