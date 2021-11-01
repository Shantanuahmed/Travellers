import { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init"

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // Google registration and login
    const signInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    };

    // observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [])


    return {
        signInUsingGoogle, user, logOut, loading
    }


};

export default useFirebase;