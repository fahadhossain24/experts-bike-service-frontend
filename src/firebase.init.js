// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8VMbucSiusDwVfMpGbJjN0nS71rKyuLg",
    authDomain: "expert-bike-service.firebaseapp.com",
    projectId: "expert-bike-service",
    storageBucket: "expert-bike-service.appspot.com",
    messagingSenderId: "326392448144",
    appId: "1:326392448144:web:7b31ffb946bbe610064415"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;