import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDyz_o5Mf2eM5IC8knS0Zhkdputg0_mPdo",
  authDomain: "newsroom-register-login.firebaseapp.com",
  projectId: "newsroom-register-login",
  storageBucket: "newsroom-register-login.appspot.com",
  messagingSenderId: "718429246124",
  appId: "1:718429246124:web:b86ab1a05d41e014524509"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Correctly define the auth object

