import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
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

document.getElementById("publish").addEventListener("click", async () => {

  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;
  const image = document.getElementById("image").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    alert("Titleയും Contentയും നിർബന്ധമാണ്.");
    return;
  }

  try {
    await addDoc(collection(db, "posts"), {
      title,
      category,
      date,
      image,
      content
    });

    alert("✅ Post Published Successfully!");

    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("date").value = "";
    document.getElementById("image").value = "";
    document.getElementById("content").value = "";

  } catch (err) {
    alert("Error: " + err.message);
  }

});
