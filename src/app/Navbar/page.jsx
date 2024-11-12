"use client";
import React, { useEffect, useState } from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

function Navbar() {

 
  const router=useRouter();

  const controller=async()=>{
     const loginStatus=localStorage.getItem("loginStatus");
    //  console.log("LOGINSTATUS= ",loginStatus);
     

     if(loginStatus){

      const res=confirm("Hey Admin! Are you sure to logout ?");
      if(res){
        let response = await axios.get("/api/players/logout");
        console.log("Response=",response.data);
        localStorage.setItem("loginStatus","");      
        router.push("/");
      }
      
      

      
      
      
     }
     else 
        router.push("/admin");
  }
  
  
return (
    <div className="p-4 bg-blue-500 flex justify-between">
      

      <span>
         <Link href={"/"}><HomeIcon></HomeIcon></Link>
      </span>

      <span className="">        
        <button onClick={controller}><AdminPanelSettingsIcon></AdminPanelSettingsIcon></button>        
      </span>
     
     
     
    </div>
  );
}

export default Navbar;
