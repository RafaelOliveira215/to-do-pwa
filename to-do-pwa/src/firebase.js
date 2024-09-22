import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCIOmS7Ohbft4A2_RokUKqLJToeGav2w7g",
    authDomain: "my-pwa-d2850.firebaseapp.com",
    projectId: "my-pwa-d2850",
    storageBucket: "my-pwa-d2850.appspot.com",
    messagingSenderId: "749161444539",
    appId: "1:749161444539:web:a98de487ff4b787c09a59e",
    measurementId: "G-NBGHY3952J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

