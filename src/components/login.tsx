import { RouteComponentProps } from "@reach/router";
import GoogleLogin from "react-google-login";
import googleLogin from "../lib/googleLogin";

export const Login: React.FC<RouteComponentProps> = () => {
    return(
        <>
        <h1>Login with Google</h1>
        <GoogleLogin clientId={`${process.env.PUBLIC_GOOGLE_CLIENT_ID}`}
            buttonText="Login with Google"
            onSuccess={async (response) => {
                const tokens = await googleLogin(response);
                if (!tokens) {
                    alert("Error while logging in with Google");
                } else {
                    //suite connection
                }
            } }
            onFailure={(response) => {
                alert("Error while logging in w/Google 2");
            } }
            cookiePolicy={"single_host_origin"} /></>)
}