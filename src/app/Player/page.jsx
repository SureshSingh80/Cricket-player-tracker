'use client'
import React, { useEffect, useState } from "react";
import "./players.css";
import axios from "axios";
import { useRouter } from "next/navigation";

function Players() {

  const [playersData,setPlayersData]=useState([]);
  const router=useRouter();
  
  useEffect(()=>{
    
       async function fetchData(){
            
            try {

              const response=await axios.get("/api/players/fetchPlayer");
              const Data=response.data.allPlayers;
              setPlayersData(Data);         
              
             

            } catch (error) {
               console.log(error.message);
            }
       }
       fetchData();
  },[]);

  const seeDetails= async(id)=>{
       console.log("iid=", id);
       localStorage.setItem("detail_Id",id);
       router.push(`/Details/${id}`);
  }

  return (

    <div className="players-card overflow-hidden">
     
      {playersData.map((data, index) => (
        <div key={index} className="p-4 border-2 border-gray-200 m-1">
          <div>
            <img src={data.image} alt="" className="image w-full h-72" />
          </div>

          <div className="p-1">
            <h5>{data.name}</h5>
          </div>
          <button onClick={()=>seeDetails(data._id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        
        </div>
      ))}

      
    </div>
  );
}

export default Players;
