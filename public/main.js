
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";


const firebaseConfig = {

    apiKey: "AIzaSyDU8VFbL8Cce63j_0OKfjGzbJ3sHIxNvEY",

    authDomain: "temwa-nyirenda-cv.firebaseapp.com",

    databaseURL: "https://temwa-nyirenda-cv-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "temwa-nyirenda-cv",

    storageBucket: "temwa-nyirenda-cv.appspot.com",

    messagingSenderId: "789171085904",

    appId: "1:789171085904:web:985d6caf5d60f13cda2755",

    measurementId: "G-TE7XT5LK9S"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


const db = getDatabase();

// const form = document.querySelector('#contact_form')

let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let message = document.querySelector("#message");

console.log(fname + lname+ email);

let submitBtn = document.querySelector("#submit");

function InsertData() {

    if (validateForm()) {

        set(ref(db, "Contact/" + Date.now()), {
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            phone: phone.value,
            message: message.value
        })
            .then(() => {
                alert("Data added successfully");
                // document.getElementById("contact_form").reset();
            })
            .catch((error) => {
                alert(error);
            });
    }
}

function validateForm() {

    if (fname.value == "" && lname.value == "") {
        alert("First name and last name cannot both be blank");
        return false;
    }
    if (email.value == "" && phone.value == "") {
        alert("Email and phone cannot both be blank");
        return false;
    } 
    if (message.value == "") {
        alert("Need to fill out message");
        return false;
    }

    return true;
} 


submitBtn.addEventListener('click', InsertData);
// findBtn.addEventListener('click', FindData);




let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

mybutton.addEventListener('click', topFunction);

// const fs = require('fs');

// function getAllData() {
//     const dbRef = ref(db);

//     get(child(dbRef, "Contact"))
//     .then((snapshot) => {
//         let contacts = [];

//         snapshot.forEach(childSnapshot => {
//             contacts.push(childSnapshot.val());
//         });
//     })

//     fs.writeFileSync('~/Downloads/data.json', jsonString, 'utf-8', (err) => {
//         if (err) throw err;
//         console.log('Data added to file');
//     });
// }

