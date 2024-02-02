
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";


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



const db = getDatabase();


let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let message = document.querySelector("#message");

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

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        mybutton.style.right = (screenWidth - 20)+ "px";
            mybutton.style.bottom = (screenHeight - 20)+ "px";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

mybutton.addEventListener('click', topFunction);

/**
 * 
 * 
 * For opening animation
 * 
 * 
 */

const bouncingBall = document.getElementById("bouncingBall");



        let bouncingBallStartX = 0;
        let bouncingBallStartY = screenHeight * 0.40;

        let movingBallX = bouncingBallStartX;
        let movingBallY = bouncingBallStartY;

        let curveWidth = screenWidth * 0.1;
        let curveHeight;

        let numVerticalBalls;

        let xSpeed = screenWidth * 0.0025;
        let ySpeed;
        let xAtCurveHeight;
        let xAtScreenHeight;

        let bouncingBallWidth = 50;
        let bouncingBallHeight = 50;

        let ballsCount = 1;

        let nameOpacity = 0.25;

        let colours = ["#acfaa3", "#a3d8fa", "#f0a3fa", "#faa3a4", "#faf0a3", "#c5a3fa"];



        function solveForA(curveHeight, xAtCurveHeight, xAtScreenHeight) {
            // Quadratic equation  y = a * (x - vertexX) * (x - vertexX) + vertexY
            // Solve for a
            // a = (y - vertexY) / ( (x - vertexX) * (x - vertexX))
            return (screenHeight - 50 - curveHeight)/((xAtScreenHeight - xAtCurveHeight) ** 2);
        }

        function getY (aValue, xValue, curveHeight, xAtCurveHeight ) {
            // Quadratic equation  y = a * (x - vertexX) * (x - vertexX) + vertexY
            
            return aValue * ((xValue - xAtCurveHeight) ** 2) + curveHeight;
        }


        function animate() {

            if (movingBallX == 0) { // first curve
                curveHeight = bouncingBallStartY;
                xAtCurveHeight = 0;
                xAtScreenHeight = screenWidth * 0.05;
            }

            if (curveHeight >= screenHeight) {
                zoomBouncingBall();
                return;
            }

            movingBallX += xSpeed;
            movingBallY = getY(solveForA(curveHeight, xAtCurveHeight, xAtScreenHeight), movingBallX, curveHeight, xAtCurveHeight);


            if (movingBallY + 50 >= screenHeight) {
                curveHeight = curveHeight + bouncingBallStartY * 0.2;
                xAtCurveHeight = xAtCurveHeight + screenWidth * 0.1;
                xAtScreenHeight = xAtScreenHeight + screenWidth * 0.1;
                movingBallY = screenHeight - 50;
            }

            bouncingBall.style.left = movingBallX+ "px";
            bouncingBall.style.top = movingBallY+ "px";
            requestAnimationFrame(animate);
        }

        function zoomBouncingBall() {
            if (movingBallX <= 0 || movingBallY <= 0 ) {
                document.body.style.backgroundColor = "#fac5a3"
                insertName();
                addBalls();
                return;
            }

            bouncingBallWidth += 50;
            bouncingBallHeight += 50;
            movingBallX -= 50;
            movingBallY -= 50;


            bouncingBall.style.width = bouncingBallWidth + "px";
            bouncingBall.style.height = bouncingBallHeight + "px";
            bouncingBall.style.left = movingBallX + "px";
            bouncingBall.style.top = movingBallY + "px";
            requestAnimationFrame(zoomBouncingBall);
        }

        function insertName() {
            let name = document.getElementById("name");

            name.style.opacity = 0.25;

            const nameContent = document.createTextNode("Temwa Nyirenda");

            name.appendChild(nameContent);

            
            return;

        }
        
        
function addBalls() {
            
    if (colours.length === 0) {
        return;
    }

            if (ballsCount >= 500) {
                skipFunction()
                return;
            }

            let sizes = [50, 100, 250, 500]
            const newBall = document.createElement("div");

            newBall.setAttribute("class", "balls")
            newBall.setAttribute("id", "ball" + ballsCount)
            newBall.style.right = Math.floor(Math.random() * screenWidth) + "px";
            newBall.style.bottom = Math.floor(Math.random() * screenHeight) + "px";

            
            newBall.style.backgroundColor = colours[Math.floor(Math.random() * 6)];
            
            let randomSize = sizes[Math.floor(Math.random() * 4)];
            newBall.style.width =  randomSize + "px";
            newBall.style.height = randomSize + "px";
            
            bouncingBall.style.opacity = 0;
            document.body.insertBefore(newBall, bouncingBall);
            

            let name = document.getElementById("name");
            nameOpacity += 0.05;
            name.style.opacity = nameOpacity;


            ballsCount++;
            requestAnimationFrame(addBalls);
        }

        function skipFunction() {
            let name = document.getElementById("name");
            let skipAnimation = document.getElementById("skipAnimation");
            let balls = document.getElementsByClassName("balls");

            name.style.display = "none";
            bouncingBall.style.display = "none";
            skipAnimation.style.display = "none";

            colours = [];

             for (let i = 0; i < balls.length; i++) {
                balls[i].style.display = "none";
            }

            let cv = document.getElementById("cv");
            cv.style.display = "block";

            } 
let skipAnimationBtn = document.getElementById("skipAnimation");
skipAnimationBtn.addEventListener('click', skipFunction);



        animate();
