"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';


function page() {

  const router=useRouter();

  const [loading, setLoading] = useState("");
  const [invalidLogin,setInvalidLogin]=useState(false);
 
  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });


  const onLogin = async() => {
    
    try {
      setLoading(true);
      let response = await axios.post("/api/players/login",admin);
      console.log("Response=",response.data);
      const loginData=response.data;
      console.log("LoginData=",loginData);
      localStorage.setItem("loginStatus",true);
      alert("Login success, Press Ok to continue...");
      router.push("/dashboard");
     

    } catch (error) {
        setInvalidLogin(true);
        console.log(error);
    }
  };

  const handleClose=()=>{
     setInvalidLogin(false);
  }

  return (


     
    <div className="absolute w-full h-full flex justify-center items-center  ">
      
      <div className=" p-4 ">
      <div className="mb-4" >
        {invalidLogin?<span className="p-2 w-full text-red-500 border-2 border-red-300 bg-red-100">Invalid Username or password <button onClick={handleClose}><CloseIcon></CloseIcon></button> </span>:""}
      </div>
      
     
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            id="username"
            value={admin.username}
            onChange={(e)=>setAdmin({...admin,username:e.target.value})}
            className="p-1 rounded-md outline-none focus:border-red-600 text-black"
            type="text"
            placeholder="Enter username"
            required
          />
        </div>

        <br />
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
            id="password"
            vlaue={admin.password}
            className="p-1 rounded-md outline-none text-black"
            type="password"
            placeholder="Enter Password"
            required
          />
        </div>

        <br />
         <button onClick={onLogin} className="px-4 py-2 bg-blue-500 rounded-xl">
          Submit
        </button>
      </div>
    </div>
    
  );
}

export default page;
