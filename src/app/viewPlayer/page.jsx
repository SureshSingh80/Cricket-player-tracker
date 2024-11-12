"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RotatingLines } from "react-loader-spinner";

import "./players.css";

function viewPlayer() {
  const [playersData, setPlayersData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/players/fetchPlayer");
        // console.log("view response= ",response.data.allPlayers);
        setPlayersData(response.data.allPlayers);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  const handleEdit = (id) => {
    localStorage.setItem("edit_Id", id);
    router.push(`/editPlayer/${id}`);
  };
  const handleDelete = async (id) => {
   
    const res=confirm("Are you sure to Delete ?");
    if(res){
      try {
       
        const response = await axios.post("/api/players/removePlayer", { id });
        console.log("delete response= ", response.data);
        router.push("/");
      } catch (error) {
        console.log(error.message);
      }
    }
    
  };

  return (
    <div className="players-card overflow-hidden">
      {playersData.length > 0 ? (
        playersData.map((data, index) => (
          <div key={index} className="p-4 border-2 border-gray-500 m-1">
            <div>
              <img src={data.image} alt="" className="image w-full h-72" />
            </div>

            <div className="p-1">
              <h5>{data.name}</h5>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handleEdit(data._id)}
                className="px-2 py-1 bg-blue-500 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(data._id)}
                className="px-2 py-1 bg-red-500 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full text-center flex justify-center items-center absolute h-full">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="130"
            visible={true}
          />
        </div>
      )}
    </div>
  );
}
export default viewPlayer;
