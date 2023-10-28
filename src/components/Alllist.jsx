"use client";
import React from "react";

import "./Alllist.css";
import "./Allcard.css";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
// import { getFirestore, onSnapshot, collection, query, orderBy, limit, getDocs   } from 'firebase/firestore';

import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase/firebase";


const Alllist = () => {
  // const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPost, setAllPost] = useState([]);
  const [data, setData] = useState([[{ name: "amila" }]]);

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

        // add pagination --------------------
        const data = fetchData;

        // Divide the data into chunks of 10
        const temp = [];
        for (let i = 0; i < Math.ceil(data.length / 25); i++) {
          temp[i] = data.slice(i * 25, (i + 1) * 25);
        }

        setAllPost(temp);
        setPageCount(temp.length);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePaginationChange = (e, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="list-coc">
        {allPost[currentPage - 1] &&
          allPost[currentPage - 1].map((item, index) => (
            <div className="card" key={index}>
              <div className="card_image">
                <a href={item.baseurl}>
                  <img src={item.imageUrl} />
                </a>
                
              </div>
            </div>
          ))}
      </div>
      <Pagination
        count={pageCount}
        variant="outlined"
        onChange={handlePaginationChange}
        shape="rounded"
        color="primary"
      
        className="bg-white px-2 py-2 mx-3 "
      />
    </div>
  );
};

export default Alllist;

