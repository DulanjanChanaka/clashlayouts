"use client";
import React from "react";

import "./Alllist.css";
import "./Allcard.css";
import { useEffect, useState } from "react";

// import { getFirestore, onSnapshot, collection, query, orderBy, limit, getDocs   } from 'firebase/firestore';

import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const Alllist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "allphoto"), orderBy("description", "desc")); // Adjust the limit as needed

    getDocs(q)
      .then((querySnapshot) => {
        const fetchData = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          fetchData.push(doc.data());
          // console.log(doc.id, " => ", doc.data());
        });
        setData(fetchData);
        console.log(fetchData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="list-coc">
      {data.map(({ imageUrl, baseurl }, index) => (
        <div className="card" key={index}>
          <div className="card_image">
            <a href={baseurl}>
              <img src={imageUrl} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alllist;
