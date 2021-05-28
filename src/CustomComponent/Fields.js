import PropTypes from "prop-types";

export const InputField = ({ nameField, typeField, className }) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-lx-7 mb-3">
        <label>{nameField}</label>
        <input type={typeField} className={`form-control ${className}`} />
      </div>
    </>
  );
};

export const NumberField = ({ nameField, typeField, className }) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-lx-7 mb-3">
        <label>{nameField}</label>
        <input type={typeField} className={`form-control ${className}`} />
      </div>
    </>
  );
};

export const SearchField = ({ nameField, typeField, className }) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-lx-7 mb-3">
        <label>{nameField}</label>
        <div className="input-group mb-3">
          <input type={typeField} className={`form-control ${className}`} />
          <div className="input-group-append">
            <button className="btn input-group-text">%</button>
          </div>
        </div>
      </div>
    </>
  );
};

export const FileFields = ({
  nameField,
  typeField,
  className,
  classNameLabel,
}) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-lx-7 mb-3">
        <div class="input-group mb-3">
          <input type="file" class="form-control" id="inputGroupFile02" />
          <label class="input-group-text" for="inputGroupFile02">
            Upload
          </label>
        </div>
      </div>
    </>
  );
};

export const ChecboxField = ({ nameField, typeField, className, name }) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-lx-7 mb-3">
        <div className="input-group form-group align-items-center remember mt-3">
          <input type={typeField} className={`mr-2 ${className}`} name={name} />
          {nameField}
        </div>
      </div>
    </>
  );
};

export const RangeField = ({ nameField, typeField, className }) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-lx-7 mb-3">
        <label>{nameField}</label>
        <input type={typeField} className={`form-control ${className}`} />
      </div>
    </>
  );
};

export const DateField = ({ nameField, typeField, className }) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-lx-7 mb-3">
        <label>{nameField}</label>
        <input type={typeField} className={`form-control ${className}`} />
      </div>
    </>
  );
};

export const TimeField = ({ nameField, typeField, className }) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-lx-7 mb-3">
        <label>{nameField}</label>
        <input type={typeField} className={`form-control ${className}`} />
      </div>
    </>
  );
};

export const PasswordField = ({ nameField, typeField, className }) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-lx-7 mb-3">
        <label>{nameField}</label>
        <input type={typeField} className={`form-control ${className}`} />
      </div>
    </>
  );
};
