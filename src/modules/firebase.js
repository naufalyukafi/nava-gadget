// var firebaseConfig = {
//     apiKey: "AIzaSyCtXObwgUNlsVqSLFdh3hhAWyj8bIHyDxE",
//     authDomain: "nava-store.firebaseapp.com",
//     databaseURL: "https://nava-store-default-rtdb.firebaseio.com",
//     projectId: "nava-store",
//     storageBucket: "nava-store.appspot.com",
//     messagingSenderId: "982774558500",
//     appId: "1:982774558500:web:b81e60a506b51a61654db1"
//   };
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

var config = {
    apiKey: "AIzaSyCtXObwgUNlsVqSLFdh3hhAWyj8bIHyDxE",
    authDomain: "nava-store.firebaseapp.com",
    databaseURL: "https://nava-store-default-rtdb.firebaseio.com",
    projectId: "nava-store",
    storageBucket: "nava-store.appspot.com",
    messagingSenderId: "982774558500"
};

class Firebase {

    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.auth.signOut();
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }
}


export default new Firebase()