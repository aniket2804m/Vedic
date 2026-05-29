import React from 'react'
// import { useState } from 'react';
// import axios from 'axios';
import API from '../../config/api';

const DeleteListing = ({item, setListings}) => {

    // const [listings, setListings] = useState([]);

    // Deleteing Function :-
            const handleDelete = async () => {
              try {
                const token = localStorage.getItem("token");
    
                await API.delete(`/listings/${item._id}`, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                });
            
    
                // Ui Update
                setListings((prev) => 
                    prev.filter((listing) => listing._id !== item._id)
              );
    
              } catch (err) {
                 console.log(err);
              }
            };
  return (
    <div className='delete'>
      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}

export default DeleteListing
