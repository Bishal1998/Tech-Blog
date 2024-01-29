
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-71deb.firebaseapp.com",
    projectId: "mern-blog-71deb",
    storageBucket: "mern-blog-71deb.appspot.com",
    messagingSenderId: "272043707803",
    appId: "1:272043707803:web:ec3664566c43f56e91653e"
};

const app = initializeApp(firebaseConfig);

export default app;