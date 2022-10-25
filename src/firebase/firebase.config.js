// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDa9J0rJZjoTfh8vl2qj__mdMMIDoqDkbo",
    authDomain: "un-courses.firebaseapp.com",
    projectId: "un-courses",
    storageBucket: "un-courses.appspot.com",
    messagingSenderId: "721296149033",
    appId: "1:721296149033:web:84350bfa95a0c463f86a38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;