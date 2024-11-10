// @ts-ignore
import {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} from "../api.js"


const redirect_uri = "http://localhost:5173/oauth";

const scopes = [
	'https://www.googleapis.com/auth/cloud-platform'
];

let googleUserCredential = null;

export async function Authorize() {
	// Generate a secure random state value.
	const state = "sigma";
	`https://accounts.google.com/o/oauth2/v2/auth?scope=${scopes[0]}&access_type=offline&include_granted_scopes=true&`+
 	`response_type=code&state=${state}&redirect_uri=${redirect_uri}&client_id=${GOOGLE_CLIENT_ID}`

	

}

export const OAuthCallback = () => {
// 	const [searchParams] = useSearchParams();
// 	const navigate = useNavigate();
  
// 	// useEffect(() => {
// 	// 	if (searchParams.has("error")) { // An error response e.g. error=access_denied
// 	// 		  console.log('Error:' + searchParams.get("error"));
// 	// 	} else { // Get access and refresh tokens (if access_type is offline)
// 	// 		var { tokens } = oauth2Client.getToken(searchParams.get("code"));
// 	// 		oauth2Client.setCredentials(tokens);
// 	// 	}
// 	// 	/** Save credential to the global variable in case access token was refreshed.
// 	// 		* ACTION ITEM: In a production app, you likely want to save the refresh token
// 	// 		*              in a secure persistent database instead. */
// 	// 	googleUserCredential = tokens;
// 	// }, []);

// 	navigate("/risk_assessment");

	return (
	<>
 	</>);
}