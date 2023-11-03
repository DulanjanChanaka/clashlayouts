"use client";
import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { Pagination } from "@mui/material";
import "./Alllist.css";
import "./Allcard.css";
const Alllist = () => {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    // Replace the URL with your new API endpoint
    Axios.get("https://benevolent-kitsune-f1c5de.netlify.app/api/all-photo")
      .then((response) => {
        const data = response.data;
        const pageSize = 25;
        const chunkedData = [];

        // Divide the data into chunks of pageSize
        for (let i = 0; i < Math.ceil(data.length / pageSize); i++) {
          chunkedData[i] = data.slice(i * pageSize, (i + 1) * pageSize);
        }

        setAllPost(chunkedData);
        setPageCount(chunkedData.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handlePaginationChange = (event, page) => {
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
                <img src={item.imageUrl
} />
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

