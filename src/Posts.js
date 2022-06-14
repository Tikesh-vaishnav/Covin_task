import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map((info,i) => (
        <li key={i} className='list-group-item'>
          <img className = "img1" src= {info.avatar} alt="avtar" />
          <h2>id =  {info.id}</h2>
          <h2>Name =  {info.first_name} {info.last_name}</h2>
          <h2>Email =  {info.email}</h2>
          
        </li>
      ))}
    </ul>
  );
};

export default Posts;