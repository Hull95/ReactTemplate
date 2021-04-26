const FieldInForm = () => {
  return (
    <div className="container pt-5">
      <div className="form-row mt-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-5  col-lx-5 mb-3">
          <label>Naziv 1</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-lx-5">
          <label>Naziv 1</label>
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-row mt-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-lx-5 mb-3">
          <label>Naziv 1</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-lx-5">
          <label>Naziv 1</label>
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-row mt-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-lx-4 mb-3">
          <label>Naziv 1</label>
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-row mt-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-lx-5 mb-3">
          <label>Naziv 1</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-lx-5">
          <label>Select 1</label>
          <select
            className="form-select form-control"
            aria-label="Default select example">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FieldInForm;
