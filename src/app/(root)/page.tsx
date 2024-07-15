"use client";
import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export default function Home() {
  const user = auth.currentUser;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in", user);
        return user;
      } else {
        console.log("User is signed out");
      }
    });
  }, []);
  return (
    <main className="h-screen">
      <h1>{user?.displayName}</h1>
      <p>{user?.email}</p>
    </main>
  );
}
