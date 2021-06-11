import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyD5Zv6v2-_p8gOaDnK8rsatrhz_BRvOpyM",
  authDomain: "firevuechat-cf04c.firebaseapp.com",
  projectId: "firevuechat-cf04c",
  storageBucket: "firevuechat-cf04c.appspot.com",
  messagingSenderId: "394564383587",
  appId: "1:394564383587:web:5d8e2db513ea178a39d956"
}

const db = firebase.initializeApp(config);
export default db;