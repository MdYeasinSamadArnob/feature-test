import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const AuthService = {
	loginWithGoogle: async () => {
        
		const provider = new firebase.auth.GoogleAuthProvider();
        // In memory persistence will be applied to the signed in Google user
    // even though the persistence was set to 'none' and a page redirect
    // occurred.
		try {
			const userCred = await firebase.auth().signInWithPopup(provider);
            console.log("The user is ", userCred);
            // user = userCred.user;
            // console.log("The user is ", user);
			return {
                
				// user: userCred.user,
                user: userCred
			};
		} catch (e) {
            error = e.message;
			// return {
			// 	error: e.message,
			// };
		}
        
    
	},
	logout: async () => {
		await firebase.auth().signOut();
	},
    

	createUserWithEmailAndPassword: async (email, password) => {
		try {
			const userCred = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password);
			await userCred.user.sendEmailVerification({
				url: process.env.NODE_ENV==="development"?"http://localhost:3000":"https://tutorshipprojectpreview.netlify.app/",
			});
			return {
				// user: userCred.user,
				// user: userCred.user,
                user: userCred
			};
		} catch (e) {
			return {
				error: e.message,
			};
		}
	},
	signInUserWithEmailAndPassword: async (email, password) => {
        
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
		try {
			const userCred = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password);
			return {
				// user: userCred.user,
                user: userCred
			};
		} catch (e) {
			return {
				error: e.message,
			};
		}
   
	},
	resetPassword: async (email) => {
		try {
			await firebase
				.auth()
				.sendPasswordResetEmail(email, { url: "http://localhost:3000/login" });
		} catch (e) {
			return e.message;
		}
	},

	deleteAccount: async () => {
		try {
			await firebase.auth().currentUser.delete();
		} catch (e) {
			return e.message;
		}
	},
	updatePassword: async (newPassword) => {
		try {
			await firebase.auth().currentUser.updatePassword(newPassword);
			return "Update successfully";
		} catch (e) {
			return e.message;
		}
	},
};