// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Auth } from "firebase/auth"

import { firebaseConfig } from "./configs/fire.config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
app