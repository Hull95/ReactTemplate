const ShowAll = ({ dataParentToChild }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {dataParentToChild.data.map((item, index) => (
            <div className="col-12 col-md-4 col-lg-4 mt-3" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <small
                      className={`text-muted ${
                        item.position === "Frontend"
                          ? "sv-background-blue"
                          : "sv-background"
                      } `}>
                      Position: {item.position}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowAll;
