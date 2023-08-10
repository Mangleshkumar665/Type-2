import React, { useState } from "react";

const AuthPage = () => {
  const [siginup, setSignup] = useState(0);
  const [login, setLogin] = useState(0);

  const toggleDisplaySignup = () => {
    if (siginup === 1) {
      setSignup(() => 0);
      setLogin(() => 1);
    } else {
      setSignup(() => 1);
      setLogin(() => 0);
    }
  };

  const toggleDisplayLogin = () => {
    if (login === 1) {
      setLogin(() => 0);
      setSignup(() => 1);
    } else {
      setLogin(() => 1);
      setSignup(() => 0);
    }
  };

  return (
    <>
      <section className="vh-100 my-2">
        <div className="container h-100 p-2 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5 ">
                  <div className="row justify-content-center ">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 ">
                      <div className=" d-flex justify-content-center ">
                        <button
                          className="  text-center h1  mb-5 mx-1  mt-4 btn option-btn-imp nav-btns "
                          onClick={toggleDisplaySignup}
                          style={{ backgroundColor: "black" }}
                        >
                          Sign up
                        </button>
                        <button
                          className="  text-center h1  mb-5 mx-1  mt-4 btn option-btn-imp nav-btns "
                          style={{ backgroundColor: "black" }}
                          onClick={toggleDisplayLogin}
                        >
                          Log In
                        </button>
                      </div>
                      {siginup === 1 ? (
                        <form className="mx-1 mx-md-4 ">
                          <caption className="h3 mx-4"> Signup </caption>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                for="form3Example1c"
                              >
                                Your Name
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                for="form3Example3c"
                              >
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                for="form3Example4c"
                              >
                                Password
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                for="form3Example4cd"
                              >
                                Repeat your password
                              </label>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      ) : (
                        <form className="mx-1 mx-md-4 ">
                          <caption className="h3 mx-4"> Login </caption>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                for="form3Example3c"
                              >
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                for="form3Example4c"
                              >
                                Password
                              </label>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sampleimage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthPage;
