import WelcomePage from '@/components/welcomePage';
import { app } from '@/firebase/firebaseconfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router';

const auth = getAuth(app);


export function signupWithEmailPassword(email: string, password: string) {
    
}


export function loginpWithEmailPassword(email: string, password: string) {
    const router = useRouter();
    
}
