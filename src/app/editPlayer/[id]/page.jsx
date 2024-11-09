'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';

function EditPlayer() {
 
  const router=useRouter();

  const [player, setPlayer] = useState({
    name: "",
    age: "",
    nationality: "",
    gender: "",
    role: "",
    battingOrder: "",
    battingStyle: "",
    image: "",
    contactNo: "",
  });

  useEffect(()=>{
      const fetchPlayerData=async ()=>{

        const id=localStorage.getItem("edit_Id");
        
        try {
           const response=await axios.post("/api/players/fetchParticularPlayer",{id});
           console.log(response.data.data);
           setPlayer(response.data.data);
           
        } catch (error) {
          console.log(error.message);
        }
      }

      fetchPlayerData();

  },[])
  const editPlayer=async ()=>{
    const id=localStorage.getItem("edit_Id");
    const data={
      id,
      name:player.name,
      age:player.age,
      nationality:player.nationality,
      gender:player.gender,
      role:player.role,
      battingOrder:player.battingOrder,
      battingStyle:player.battingStyle,
      image:player.image,
      contactNo:player.contactNo
   }
      try {
           const response=await axios.post('/api/players/updatePlayer',data);
           console.log(response.data);
           router.push("/viewPlayer");
      } catch (error) {
         console.log(error.message);
      }
  }
    
  return (
    <div className="absolute w-full h-full flex items-center justify-center ">
    <div className="w-1/2 bg-gray-500 p-4">
      <h2 className="text-center text-2xl">Fill Player Details</h2>
      <div className="mb-2">
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          className="text-black outline-none p-1 w-full rounded-md"
          type="text"
          placehoder="Enter Player name"
          value={player.name}
          onChange={(e) => {
            setPlayer({ ...player, name: e.target.value });
          }}
        />
      </div>

      <div className="mb-2">
        <label htmlFor="age">Age</label>
        <br />
        <input
          id="age"
          className="text-black outline-none p-1 w-full rounded-md"
          type="number"
          placehoder="Enter Player Age"
          value={player.age}
          onChange={(e) => {
            setPlayer({ ...player, age: e.target.value });
          }}
        />
      </div>

      <div className="mb-2">
        <label htmlFor="nationality">Nationality</label>
        <br />
        <input
          id="nationality"
          className="text-black outline-none p-1 w-full rounded-md"
          type="text"
          placehoder="Enter Player Nationality"
          value={player.nationality}
          onChange={(e) => {
            setPlayer({ ...player, nationality: e.target.value });
          }}
        />
      </div>

      <div className="mb-2">
        <label htmlFor="gender">Gender</label>
        <br />
        <select  className="text-black w-full outline-none p-1 rounded-md" name="" id="gender" value={player.gender} onChange={(e) => {
            setPlayer({ ...player, gender: e.target.value });
          }}>
            <option value="">---Select---</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
       
      </div>

      <div className="mb-2">
        <label htmlFor="role">Role</label>
        <br />
        <select  className="text-black w-full outline-none p-1 rounded-md" value={player.role} name="" id="role" onChange={(e) => {
            setPlayer({ ...player, role: e.target.value });
          }}>
          <option value="">---Select---</option>
          <option value="Batsman">Batsman</option>
          <option value="Baller">Baller</option>
          <option value="All rounder">All rounder</option>
        </select>
       
      </div>

      <div className="mb-2">
        <label htmlFor="battingOrder">Batting Order</label>
        <br />
        <select  className="text-black w-full outline-none p-1 rounded-md" value={player.battingOrder} name="" id="battingOrder" onChange={(e) => {
            setPlayer({ ...player, battingOrder: e.target.value });
          }}>
          <option value="">---Select---</option>
          <option value="Opener">Opener</option>
          <option value="OneDown">OneDown</option>
          <option value="In Middle">In Middle</option>
          <option value="In Last">In Last</option>
        </select>
       
      </div>

      <div className="mb-2">
        <label htmlFor="battingStyle">Batting Style</label>
        <br />
        <select  className="text-black w-full outline-none p-1 rounded-md" value={player.battingStyle} name="" id="battingStyle" onChange={(e) => {
            setPlayer({ ...player, battingStyle: e.target.value });
          }}>
          <option value="">---Select---</option>
          <option value="LeftHander">LeftHander</option>
          <option value="RightHander">RightHander</option>
        </select>
      </div>

      <div className="mb-2">
        <label htmlFor="image">Enter Image/URL</label><br />
        <input id="image" type="text" value={player.image} onChange={(e)=>setPlayer({...player,image:e.target.value})} className="p-1 rounded-md w-full text-black" />
        <br />
       
      </div>

      <div className="mb-2">
        <label htmlFor="contactNo">Contact No</label>
        <br />
        <input
          id="contactNo"
          className="text-black outline-none p-1 w-full rounded-md"
          type="text"
          placehoder="Enter Player ContactNo"
          value={player.contactNo}
          onChange={(e) => {
            setPlayer({ ...player, contactNo: e.target.value });
          }}
        />
      </div>

      <button className="px-4 py-2 bg-blue-600 w-full rounded-md" onClick={editPlayer}>Edit</button>

    </div>
  </div>
  );
  
}

export default EditPlayer