import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYXj4eYjj3lNvl6GCyG6xHqwJGikBQEVs",
  authDomain: "test-project-ddba6.firebaseapp.com",
  projectId: "test-project-ddba6",
  storageBucket: "test-project-ddba6.appspot.com",
  messagingSenderId: "715273395530",
  appId: "1:715273395530:web:7aee0e1be4c63929bcf5b3",
  measurementId: "G-CXYV8JWB22",
};

export const firebaseApp = initializeApp(firebaseConfig);
