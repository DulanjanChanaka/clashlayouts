// "use client"
// // Allayout.js
// import React, { useEffect, useState } from "react";
// import Alllist from "./Alllist";
// import { Pagination } from "@mui/material";

// import Headline from "./Headline";
//  // Import the data array from the appropriate file
// import { getFirestore, onSnapshot, getDocs, collection, query , limit} from 'firebase/firestore';
// import { db } from "@/firebase/firebase";


// const Allayout = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(20); // Change to 10 for 10 items per page
//   const [data, setData] = useState([]);
//   const [pageCount, setPageCount] = useState(10);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const querySnapshot = await getDocs(
//   //       query(
//   //         collection(db, "allphoto"),
         
//   //         limit(postsPerPage)
//   //       )
//   //     );
//   //     const fetchedData = querySnapshot.docs.map((doc) => ({
//   //       id: doc.id,
//   //       ...doc.data(),
//   //     }));
//   //     setData(fetchedData);
//   //   };

//   //   fetchData();
//   // }, [currentPage, db, postsPerPage]);


//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, 'allphoto'), (snapshot) => {
//       const data = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setData(data);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <div id='all' className="app">
//       <Headline title="All" />
//       <Alllist data={data} />
//       <Pagination
//         count={pageCount}
//         variant="outlined"
//         onChange={(e, page) => console.log(data[page - 1])}
//         shape="rounded"
//       />

//     </div>
//   );
// };

// export default Allayout;