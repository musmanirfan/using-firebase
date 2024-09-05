import WelcomePage from '@/components/welcomePage';
import { app } from '@/firebase/firebaseconfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router';

const auth = getAuth(app);


export function signupWithEmailPassword(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("user successfully signup");

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
            // ..
        });
}


export function loginpWithEmailPassword(email: string, password: string) {
    const router = useRouter();
    
}
