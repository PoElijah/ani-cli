import {USERS_API} from "../../constants";

export const registerNewUser = (user) => {
	return (dispatch) => {
		fetch(USERS_API, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user)
		})
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}
};