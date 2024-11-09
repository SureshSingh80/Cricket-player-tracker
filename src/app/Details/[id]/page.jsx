'use client'
import React, { useState,useEffect } from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import axios from 'axios';
import './player.css'

function Details() {

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

        const id=localStorage.getItem("detail_Id");
        
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

  return (
    <div className='flex items-center justify-center w-full h-[100%] absolute'>
        <div className='bg-blue-500 text-white p-2 w-[50%]  player-container'>
           <img src={player.image?player.image:"empty string used for avoid error(an empty error passed in src attribute) while not loading image url"} alt="image can't loaded" width={"200px"} height={"100px"} className='mb-2'/>
           <p className='mb-3'><i>Name: {player.name}</i></p>
           <p className='mb-3'>Age: {player.age}</p>
           <p className='mb-3'><i>Nationality: {player.nationality}</i></p>
           <p className='mb-3'><i>Gender: {player.gender}</i></p>
           <p className='mb-3'><i>Role: {player.role}</i></p>
           <p className='mb-3'><i>Batting-Order: {player.battingOrder}</i></p>
           <p className='mb-3'><i>Batting-Style: {player.battingStyle}</i></p>
           <p className='mb-3'><i>Contact <PhoneIcon></PhoneIcon> : {player.contactNo}</i></p>
        </div>
    </div>
  )
}

export default Details