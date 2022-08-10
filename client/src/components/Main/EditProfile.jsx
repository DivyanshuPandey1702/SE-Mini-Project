import React, { useState, useEffect } from "react";
import Axios from 'axios';

function EditProfile() {

  const [id, setId] = useState('');
  const [Name, setName] = useState('');

  useEffect(() => {
    Axios.get("http://localhost:8080/getuser")
      .then(res => {
        setId(res.data._id);
        setName(res.data.userName);
      });
  }, []);

  function updateProfile() {
    Axios.post("http://localhost:8080/editprofile", {
      _id: id,
      data: {
        userName: Name,
      },
    });

    console.log("Profile Updated");
  }

  return (
    <main>
      <div className="page">
        <form onSubmit={e => { e.preventDefault(); }} action="/editprofile">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" onChange={(e) => {
                setName(e.target.value); 
              }} value={Name}/>
          <br/><br/>
          <button onClick={updateProfile}>Submit</button>
        </form>
      </div>
    </main>
  );
}

export default EditProfile;
