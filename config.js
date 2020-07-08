import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBIN32VAIbTEJi8zaUDK0QPO1GxpBuK9NQ",
    authDomain: "kingsmartbin.firebaseapp.com",
    databaseURL: "https://kingsmartbin.firebaseio.com",
    projectId: "kingsmartbin",
    storageBucket: "kingsmartbin.appspot.com",
    messagingSenderId: "463640920379",
    appId: "1:463640920379:web:00d3d07108c1bab2c1f71e"
};
let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
