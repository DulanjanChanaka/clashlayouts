"use client"
import React from "react";

import "./Alllist.css";
import "./Allcard.css";
import { useEffect, useState } from 'react';

import { getFirestore, onSnapshot, collection,  } from 'firebase/firestore';
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


const Alllist = () => {

  const [data, setData] = useState ([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'allphoto'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);


    
      return (
        <div className="list-coc">
          {data.map(({ imageUrl, index }) => (
            <div className="card" key={index}>
              <div className="card_image">
                <img src={imageUrl} />
              </div>
            </div>
          ))}
        </div>
      );
};

export default Alllist;