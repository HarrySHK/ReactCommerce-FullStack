// import "./registration.css";
import styled from "styled-components";

const RegistrationWrapper = styled.div`
  // @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");

  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  color: #e1e0e3;
  background-color: white;
  overflow-x: hidden;

  a {
    cursor: pointer;
    transition: all 200ms linear;
  }
  a:hover {
    text-decoration: none;
  }
  .link {
    color: #c4c3ca;
  }
  .link:hover {
    color: #ffeba7;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.7;
  }
  h4 {
    font-weight: 600;
  }
  h6 span {
    padding: 0 20px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .section {
    position: relative;
    width: 100%;
    display: block;
  }
  .full-height {
    min-height: 100vh;
  }
  [type="checkbox"]:checked,
  [type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  .checkbox:checked + label,
  .checkbox:not(:checked) + label {
    position: relative;
    display: block;
    text-align: center;
    width: 60px;
    height: 16px;
    border-radius: 8px;
    padding: 0;
    margin: 10px auto;
    cursor: pointer;
    background-color: #766f6f9a;
  }
  .checkbox:checked + label:before,
  .checkbox:not(:checked) + label:before {
    position: absolute;
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: #bebcb3;
    background-color: #010207db;
    font-family: "unicons";
    content: "\eb4f";
    z-index: 20;
    top: -10px;
    left: -10px;
    line-height: 36px;
    text-align: center;
    font-size: 24px;
    transition: all 0.5s ease;
  }
  .checkbox:checked + label:before {
    transform: translateX(44px) rotate(-270deg);
  }

  .card-3d-wrap {
    position: relative;
    width: 440px;
    max-width: 100%;
    height: 470px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    perspective: 800px;
    margin-top: 60px;
  }
  .card-3d-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: all 600ms ease-out;
  }
  .card-front,
  .card-back {
    width: 100%;
    height: 100%;
    background-color: #2a2b38;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg");
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 300%;
    position: absolute;
    border-radius: 6px;
    left: 0;
    top: 0;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .card-back {
    transform: rotateY(180deg);
  }
  .checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
    transform: rotateY(180deg);
  }
  .center-wrap {
    position: absolute;
    width: 100%;
    padding: 0 35px;
    top: 50%;
    left: 0;
    transform: translate3d(0, -50%, 35px) perspective(100px);
    z-index: 20;
    display: block;
  }

  .form-group {
    position: relative;
    display: block;
    margin: 0;
    padding-top: 4px;
  }
  .form-style {
    padding: 13px 20px;
    padding-left: 55px;
    height: 48px;
    margin-top: 7px;
    width: 100%;
    font-weight: 500;
    border-radius: 4px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.5px;
    border: 2px solid rgba(189, 182, 182, 0.379);
    outline: none;
    color: #c4c3ca;
    background-color: #1f2029;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
  }
  .form-style:focus,
  .form-style:active {
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
  }
  .input-icon {
    position: absolute;
    top: 0;
    left: 18px;
    height: 48px;
    font-size: 24px;
    line-height: 48px;
    text-align: left;
    color: #ffeba7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .form-group input:-ms-input-placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  .form-group input::-moz-placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  .form-group input:-moz-placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  .form-group input::-webkit-input-placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  .form-group input:focus:-ms-input-placeholder {
    opacity: 0;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  .form-group input:focus::-moz-placeholder {
    opacity: 0;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  .form-group input:focus:-moz-placeholder {
    opacity: 0;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  .form-group input:focus::-webkit-input-placeholder {
    opacity: 0;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
  }

  .btn {
    border-radius: 4px;
    height: 44px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    padding: 0 30px;
    letter-spacing: 1px;
    margin-top: 30px;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center;
    text-align: center;
    border: none;
    background-color: #797777;
    color: #131417;
    box-shadow: 0 8px 24px 0 rgba(255, 235, 167, 0.2);
    font-weight: bold;
  }
  .btn:active,
  .btn:focus {
    background-color: #102770;
    color: #d4b863;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }
  .btn:hover {
    background-color: #010204;
    color: #ffffff;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }

  .logo {
    position: absolute;
    top: 30px;
    right: 30px;
    display: block;
    z-index: 100;
    transition: all 250ms linear;
  }
  .logo img {
    height: 26px;
    width: auto;
    display: block;
  }

  .create_account {
    margin-top: 25px;
  }
  .c_a_a {
    /* text-decoration: underline; */
    padding: 3px;
    padding-top: 10px;
    border-bottom: 1px solid white;
    cursor: pointer;
    margin-left: 7px;
    margin-top: 4px;
  }

  .c_a_a:hover {
    color: rgb(186, 97, 97);
  }

  .left {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.742);
  }

  .right {
    margin-left: 70px;
  }
`;

function Registration() {
  return (
    <RegistrationWrapper className="main_div bg-white">
      <div class="section">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5  pt-sm-2 text-center">
                <h6 class="mb-0 pb-3 left">
                  <span>Log In </span>
                  <span className="right">Sign Up</span>
                </h6>
                <input
                  class="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Log In</h4>
                          <div class="form-group">
                            <input
                              type="email"
                              name="logemail"
                              class="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="#" class="btn mt-4">
                            submit
                          </a>
                          <p className="mt-5 create_account">
                            Doesn't have an Account ?{" "}
                            <span className="c_a_a">Create Now </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-[-2px]">Sign Up</h4>
                          <div class="form-group">
                            <input
                              type="text"
                              name="logname"
                              class="form-style"
                              placeholder="Your First Name"
                              id="logname"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-user"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="text"
                              name="logname"
                              class="form-style"
                              placeholder="Your Last Name"
                              id="logname"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-user"></i>
                          </div>

                          <div class="form-group mt-2">
                            <input
                              type="email"
                              name="logemail"
                              class="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="#" class="btn mt-4">
                            Create an Account
                          </a>

                          <p className="create_account">
                            Already have an account?{" "}
                            <span className="c_a_a">Login Now</span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RegistrationWrapper>
  );
}

export default Registration;
