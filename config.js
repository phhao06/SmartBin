import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCh76ye_EzycMhUczcvRn-FdUwZGAhcKIg",
    authDomain: "smartbin-1920.firebaseapp.com",
    databaseURL: "https://smartbin-1920.firebaseio.com",
    projectId: "smartbin-1920",
    storageBucket: "smartbin-1920.appspot.com",
    messagingSenderId: "230785670216",
    appId: "1:230785670216:web:729044352cb89817f48c7d",
    measurementId: "G-T000K3966K"
};
let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
