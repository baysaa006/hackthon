import {
  faApple
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import api from "../server/api";
import { setToken, setUser } from "../server/auth";
import "../styles/form.css";
import constant from "../utils/constant";



const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleLogin = (response) => {
    if (response.googleId && response.tokenId) {
      const { tokenId, googleId, profileObj } = response;
      api
        .loginGoogle(profileObj.email, profileObj.name, googleId, tokenId)
        .then((response) => {
          dispatch(setToken(response.access_token));
          api.getProfile().then((response) => {
            dispatch(
              setUser({
                nickname: response.user.nickname,
                email: response.user.email,
                userId: response.user.id,
              })
            );
            navigate("/home");
          });
        });
    }
    console.log("respoonse:", response);
  };

  const handleFacebookLogin = (response) => {
    const { accessToken, id, email, name } = response;
    api.loginFacebook(email, name, id, accessToken).then((response) => {
      dispatch(setToken(response.access_token));
      api.getProfile().then((response) => {
        dispatch(
          setUser({
            nickname: response.user.nickname,
            email: response.user.email,
            userId: response.user.id,
            avatar: response.user.avatar,
          })
        );
        setTimeout(() => {
          navigate("/home");
        }, 100);
      });
    });
  };

  return (
    <div className="flex form items-center justify-center">
      <div className="Login left-40 w-96 h-auto ">
        <div className="m-auto flex flex-col gap-8 justify-center items-center">
          <h4 color="main-color" className="text-color2 ">
            Login to your social account
          </h4>
          <div className="w-auto text-xs    h-auto flex flex-col justify-center items-center gap-9 ">
            <FacebookLogin
              className="w-72"
              appId={428215835772775}
              fields="name,email,picture"
              callback={handleFacebookLogin}
              render={(renderProps) => (
                <button onClick={renderProps.onClick}>
                  This is my custom FB button
                </button>
              )}
            />
            <div>
              <h1>Or</h1>
            </div>
            <GoogleLogin
              className="w-full"
              clientId={constant.GOOGLE_CLIENT_ID}
              buttonText="Sign In with Google"
              onSuccess={(r) => handleGoogleLogin(r)}
              onFailure={(r) => handleGoogleLogin(r)}
              // isSignedIn={true}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          {/* 
          <div
            onclick="FacebookLogin ()"
            className="w-48 cursor-pointer justify-center bg-white h-12 gap-2 flex items-center shadow-xl rounded-sm"
          >
            <FontAwesomeIcon
              className="w-11 h-8  "
              color="black"
              icon={faApple}
            />
            <h3 className=" text-zinc-800 text-sm ">Continue with Apple </h3>
          </div> */}
        </div>
      </div>
      <a href="/home" className=" justify-center flex flex-col items-center">
        <img src={logo} alt="" />
        <img src={logo2} alt="" width={300} />
      </a>
    </div>
  );
};

export default Login;
