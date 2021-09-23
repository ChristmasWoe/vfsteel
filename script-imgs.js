// const firebase = require("firebase");
// console.log("kk",firebase)
// import { initializeApp } from "firebase/app";
// import { getStorage, ref, listAll } from "firebase/storage";
// // import { firebaseConfig } from "./firebase-config";

// const firebaseConfig = {
//     apiKey: 'AIzaSyDh-wMqQ_K_SKi7njCNNmytIWyW_zmAQNU',
//     authDomain: 'localhost:3000',
//     databaseURL: 'https://console.firebase.google.com/project/vfsteel-ada5d/firestore/data/',
//     storageBucket: 'https://console.firebase.google.com/project/vfsteel-ada5d/storage/vfsteel-ada5d.appspot.com/files'
//   };

// const firebaseApp = initializeApp(firebaseConfig);
// const storage = getStorage(firebaseApp);

// // Create a reference under which you want to list
// const listRef = ref(storage, 'files/imgs');

// let body = document.getElementsByTagName("body")[0]
// console.log("body",body)

// body.addEventListener("onload",function(e){
//     listFunction()
// })

// // Find all the prefixes and items.
// const listFunction = () => {
//     listAll(listRef)
//     .then((res) => {
//       res.prefixes.forEach((folderRef) => {
//         // All the prefixes under listRef.
//         // You may call listAll() recursively on them.
//       });
//       let result = [];
//       res.items.forEach((itemRef) => {
//         result.push(itemRef);
//           // All the items under listRef.
//       });
//       console.log("abc",result)
//     }).catch((error) => {
//         console.log(error)
//       // Uh-oh, an error occurred!
//     });
// }

