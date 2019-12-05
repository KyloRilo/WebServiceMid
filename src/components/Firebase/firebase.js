import app from'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBHeTk3vPuoVFFVVfia3cx7XdOZ4P0zHZ8",
    authDomain: "webservicemidterm.firebaseapp.com",
    databaseURL: "https://webservicemidterm.firebaseio.com",
    projectId: "webservicemidterm",
    storageBucket: "webservicemidterm.appspot.com",
    messagingSenderId: "26177089883",
    appId: "1:26177089883:web:6a773a3938d2f42c7e6a7e",
    measurementId: "G-S2LMF21EDL"
};

class Firebase {
    constructor() {
        app.initializeApp(config)

        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.asignOut();
}

export default Firebase;