import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import { AuthService } from "../service/AuthService";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const authContext = createContext();

export default function useAuth() {
	return useContext(authContext);
}

export function AuthProvider(props) {
	const [user, setUser] = useState(null);
	const [error, setError] = useState();
	const [accountError,setAccountError] = useState(null);

	const router = useRouter();
	const pathname = router.pathname;

	const loginWithGoogle = async () => {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(async () => {
		const {error,  user } = await AuthService.loginWithGoogle();
        console.log("The New user is ", user);
        console.log("The error is ", error);
		if (error) {
			setError({ [pathname]: error });
		}
		setUser(user.user ?? null);
		// setUser(user ?? null);
		router.push("/")
        return user;
    }).catch((e) => {
        // Handle Errors here.
        var errorCode = e.code;
        var errorMessage = e.message;
        
        
      });
	};

	const logout = async () => {
		await AuthService.logout();
		setUser(null);
	};

	const createUserWithEmailAndPassword = async (email, password) => {
		if (email && password) {
			firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(async () => {
			const { error, user } = await AuthService.createUserWithEmailAndPassword(
				email,
				password
			);
			console.log("The New user is ", user);
        console.log("The error is ", error);
			if (error) {
				setError({ [pathname]: error });
				console.log("The error is ", error);
				console.log("User auth already exists")
				setAccountError(error)
				return;
			}
			setUser(user.user ?? null);
			// setUser(user ?? null);
			router.push(`/verify?email=${email}`);
			return user;
		}).catch((e) => {
			// Handle Errors here.
			var errorCode = e.code;
			var errorMessage = e.message;
			
			
		  });
		} else {
			setError({ [pathname]: "Email and password can not be empty" });
		}
	};

	const signInUserWithEmailAndPassword = async (email, password) => {
		if (email && password) {
			firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(async () => {
			const { error, user } = await AuthService.signInUserWithEmailAndPassword(
				email,
				password
			);
			console.log("The New user is ", user);
        console.log("The error is ", error);
			if (error) {
				setError({ [pathname]: error });
				return;
			}
			setUser(user.user ?? null);
			// setUser(user ?? null);
			router.push("/");
			return user;
		}).catch((e) => {
			// Handle Errors here.
			var errorCode = e.code;
			var errorMessage = e.message;
			
			
		  });
		} else {
			setError({ [pathname]: "Email and password can not be empty" });
		}
	};
	const resetPassword = async (email) => {
		if (email) {
			const error = await AuthService.resetPassword(email);
			if (error) {
				setError({ [pathname]: error });
				return;
			}
			router.push(`/verify?email=${email}`);
		} else {
			setError({ [pathname]: "Email can not be empty" });
		}
	};

	const deleteAccount = async () => {
		const error = await AuthService.deleteAccount();
		setError({ [pathname]: error });
	};

	const updatePassword = async (confirmPassword, password) => {
		if (confirmPassword === password) {
			const error = await AuthService.updatePassword(password);
			setError({ [pathname]: error });
		} else {
			setError({ [pathname]: "password doesn't match!" });
		}
	};

	const value = {
		user,
		error,
		loginWithGoogle,
		logout,
		setUser,
		createUserWithEmailAndPassword,
		signInUserWithEmailAndPassword,
		resetPassword,
		deleteAccount,
		updatePassword,
		accountError,
	};

	return <authContext.Provider value={value} {...props} />;
}