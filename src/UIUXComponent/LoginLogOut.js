import { Link } from "react-router-dom";
import { FaKey, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";

const LogInLogOut = () => {
  const [userMode, setUserMode] = useState("login");
  const { register, errors, handleSubmit } = useForm();

  const handleClickNewFormUser = (e) => {
    e.preventDefault();
    setUserMode("create-new-user");
  };

  const handleClickBackToLogin = (e) => {
    e.preventDefault();
    setUserMode("login");
  };

  const onSubmit = () => {
    console.log("login");
  };

  return (
    <div className="container sv-login">
      <div className="d-flex justify-content-right h-100">
        {userMode === "login" && (
          <div className="col-12  col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
              <h5 className="card-header">Log in</h5>
              <div className="card-body mt-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FaUser />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="user"
                      id="user"
                      aria-invalid={errors.user ? "true" : "false"}
                      autoFocus
                      ref={register({ required: true })}
                    />
                  </div>
                  {errors.user && errors.user.type === "required" && (
                    <span role="alert" className="sv-form-field-required">
                      Blog author is required!
                    </span>
                  )}
                  <div className="input-group form-group mt-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FaKey />
                      </span>
                    </div>
                    <input type="password" className="form-control" required />
                  </div>
                  <div className="input-group form-group align-items-center remember">
                    <input type="checkbox" className="mr-2" />
                    Remember Me
                  </div>
                  <div className="form-group">
                    <div className="row text-center">
                      <div className="col-12 col-md-12 col-lg-12 text-right">
                        <button type="submit" className="btn btn-primary w-100">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="a-divider a-divider-break">
                    <h5>New user?</h5>
                  </div>
                  <div className="form-group">
                    <div className="row text-center">
                      <div className="col-12 col-md-12 col-lg-12 text-right">
                        <button
                          type="submit"
                          className="btn btn-secondary w-100"
                          onClick={handleClickNewFormUser}>
                          Create new user
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {userMode === "create-new-user" && (
          <div className="col-12  col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
              <h5 className="card-header">Log in</h5>
              <div className="card-body mt-4">
                <form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FaUser />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      autoFocus
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FaKey />
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="input-group form-group align-items-center remember">
                    <input type="checkbox" className="mr-2" />
                    Remember Me
                  </div>
                  <div className="form-group">
                    <div className="row text-center">
                      <div className="col-12 col-md-12 col-lg-12 text-right">
                        <button type="submit" className="btn btn-primary w-100">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="a-divider a-divider-break">
                    <h5>Back to login</h5>
                  </div>
                  <div className="form-group">
                    <div className="row text-center">
                      <div className="col-12 col-md-12 col-lg-12 text-right">
                        <button
                          type="submit"
                          className="btn btn-secondary w-100"
                          onClick={handleClickBackToLogin}>
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogInLogOut;
