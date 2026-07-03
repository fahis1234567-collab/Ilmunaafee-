import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjc5pjDNv0J_x1fldzcmjNmNHm6mQNUvA",
  authDomain: "ilmunaafee.firebaseapp.com",
  projectId: "ilmunaafee",
  storageBucket: "ilmunaafee.firebasestorage.app",
  messagingSenderId: "665519723428",
  appId: "1:665519723428:web:ff5f3bd3338f4910306731"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const postContainer = document.getElementById("posts");

async function loadPosts() {
  console.log("Loading posts...");
 
  const querySnapshot = await getDocs(collection(db, "Posts"));
console.log(querySnapshot.size);
  
  querySnapshot.forEach((doc) => {
    const post = doc.data();

    postContainer.innerHTML += `
      <div class="post">
        <img src="${post.image}">
        <div class="post-content">
          <h3>${post.title}</h3>
          <p>📅 ${post.date}</p>
          <p>📂 ${post.category}</p>
        </div>
      </div>
    `;
  });
}

loadPosts();
