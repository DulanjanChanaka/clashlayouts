"use client"
// Allayout.js
import React, { useEffect, useState } from "react";
import Alllist from "./Alllist";
import Pagination from "./Pagination";
import Headline from "./Headline";
 // Import the data array from the appropriate file
import { getFirestore, onSnapshot, getDocs, collection,  } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDdyTqvViyqtLETSrNMzqFP-xM0NIa9lQ8",
  authDomain: "clashlayouts-9d19d.firebaseapp.com",
  projectId: "clashlayouts-9d19d",
  storageBucket: "clashlayouts-9d19d.appspot.com",
  messagingSenderId: "1073716509146",
  appId: "1:1073716509146:web:56713b2e4bf310187b28e3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Allayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2); // Set the correct postsPerPage value
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "topphoto"));
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
    };

    fetchData();
  }, []);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="app">
      <Headline title="All" />
      <Alllist data={currentPosts} />
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Allayout;