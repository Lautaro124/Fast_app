import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_A0GBjMsut9BACaFHROlEEBmXFJEs4Sw",
  authDomain: "esp32-rtbd-rev3.firebaseapp.com",
  databaseURL: "https://esp32-rtbd-rev3-default-rtdb.firebaseio.com",
  projectId: "esp32-rtbd-rev3",
  storageBucket: "esp32-rtbd-rev3.appspot.com",
  messagingSenderId: "689967298809",
  appId: "1:689967298809:web:b7a1974a394b5385f18a28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;