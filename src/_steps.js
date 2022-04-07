/**
 * Steps to use Firebase
 * 1. Create a project on console.firebase.google.com
 * 2.Install firebase npm install firebase
 * 3. Register web app in firebase
 * 4.copy firebase init with config from firebase project settings into a file firebase.init.js
 * 5. export default app from firebase init.js
 * 6.import {getAuth} from "firebase/auth" and create const auth = getAuth(app)
 * 7.import app firbase init into App.js
 * 8.turn on google authentication (firebase>authentication> enable google sign in)
 * 9. create google provider
 * 10. use signInWithPopup and pass auth and provider
 * 11. Handle then and error
 */
