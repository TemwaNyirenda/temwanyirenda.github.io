// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {

    apiKey: "AIzaSyDU8VFbL8Cce63j_0OKfjGzbJ3sHIxNvEY",

    authDomain: "temwa-nyirenda-cv.firebaseapp.com",

    databaseURL: "https://temwa-nyirenda-cv-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "temwa-nyirenda-cv",

    storageBucket: "temwa-nyirenda-cv.appspot.com",

    messagingSenderId: "789171085904",

    appId: "1:789171085904:web:8c421579d64c450ada2755",

    measurementId: "G-7JLF7F11KR"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

function writeContactData(first_name, surname, email, phone_number, message) {
    console.log("In save data")
    const db = getDatabase();
    const reference = ref(db, "contacts/" + contactId)

    set (reference, {
        first_name: first_name, 
        surname: surname,
        email: email,
        phone_number: phone_number,
        message: message
    });
}

writeContactData("temwa", "nyirenda", "tn", "078", "Hello World");
