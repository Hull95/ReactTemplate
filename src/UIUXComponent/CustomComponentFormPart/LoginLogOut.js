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
    <div className="container sv-login pt-4 pb-4">
      <div className="row d-flex justify-content-right h-100">
        {userMode === "login" && (
          <div className="col-12 col-md-12 col-lg-4 col-xl-4">
            <div className="card">
              <h5 className="card-header">Log in</h5>
              <div className="card-body mt-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-group form-group mb-0">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FaUser />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="user"
                      aria-invalid={errors.user ? "true" : "false"}
                      autoFocus
                      ref={register({ required: true })}
                    />
                  </div>
                  {errors.user && errors.user.type === "required" && (
                    <div className="text-right">
                      <small role="alert" className="sv-form-field-required">
                        Username is required!
                      </small>
                    </div>
                  )}
                  <div className="input-group form-group mt-3 mb-0">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FaKey />
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      aria-invalid={errors.password ? "true" : "false"}
                      ref={register({ required: true })}
                    />
                  </div>
                  {errors.password && errors.password.type === "required" && (
                    <div className="text-right">
                      <small role="alert" className="sv-form-field-required">
                        Password is required!
                      </small>
                    </div>
                  )}
                  <div className="input-group form-group align-items-center remember mt-3">
                    <input type="checkbox" className="mr-2" />
                    Remember Me
                  </div>
                  <div className="form-group">
                    <div className="row text-center">
                      <div className="col-12 col-md-12 col-lg-12 text-right">
                        <button type="submit" className="btn btn-primary w-100">
                          Login
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
          <div className="col-12  col-sm-12 col-md-8 col-lg-8 col-lx-8">
            <div className="card">
              <h5 className="card-header">Log in</h5>
              <div className="card-body">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-lx-6 mb-3">
                      <label>First name: </label>
                      <input type="text" className="form-control" autoFocus />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-lx-6 mb-3">
                      <label>Surname: </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-lx-12 mb-3">
                      <label>Mobile number or email address: </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-lx-6 mb-3">
                      <label>Password: </label>
                      <input type="password" className="form-control" />
                      <small>
                        Use 8 or more characters with a mix of letters,numbers
                        and symbols.
                      </small>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-lx-6 mb-3">
                      <label>Repeat password: </label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <div className="row text-center">
                      <div className="col-12 col-md-12 col-lg-12 text-right">
                        <button type="submit" className="btn btn-primary w-25">
                          Sign up
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="a-divider a-divider-break">
                    <h5>Back to login</h5>
                  </div>
                  <div className="form-group">
                    <div className="row text-center">
                      <div className="col-12 col-md-12 col-lg-12">
                        <button
                          type="submit"
                          className="btn btn-secondary w-50"
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
