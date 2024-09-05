import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyBjlM40bdJoS3aHmrkdbapgiBeCvH3UC1s",
    authDomain: process.env.authDomain,
    projectId: "practice-242f1",
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: "1:355333087835:web:2340dbb980a3e37c51d57e",
    measurementId: process.env.measurementId
};




const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export {
    auth,
}