// import React,{useState, useEffect} from "react";
// import axios from 'axios';
// import './card.css'

// function card(){
    
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage] = useState(10)

//     useEffect(() => {
//         const fetchPosts = async () => {
//           setLoading(true);
//           const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//           setPosts(res.data);
//           setLoading(false);
//         };

//         fetchPosts();
//   }, []);
//   console.log(posts);
//     return <>
//         <div className="crd">
//             <h1>Name</h1>
//             <p>User information
//             </p>
//         </div>
        
        

//         </>
    
    
    
// }

// export default card