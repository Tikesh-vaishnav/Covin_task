import React,{useState, useEffect} from "react";
import Posts from './Posts'
import Pagination from "./Pagination";

import axios from 'axios';
import './card.css'

const App = () => {
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(1)

    
    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get('https://reqres.in/api/users?page=2');
          setPosts(res.data.data);

          setLoading(false);

        };

        fetchPosts();
  }, []);


  
  //get current post/card
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

  //change page number - 
  const paginate = pageNumber => setCurrentPage(pageNumber);


   console.log(posts);
    return (<>
      <div className="sec"></div>
        <div className="crd">
            <h1>Information</h1>
            <Posts posts = {currentPosts} loading = {loading}> </Posts>
        </div>
        

      <div className="crd2">
      <Pagination postsPerPage = {postsPerPage}
              totalPosts = {posts.length}
              paginate ={paginate}/>
      </div>
        
        </>
        )    
}
export default App