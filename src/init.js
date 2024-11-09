// import Players from "@/Models/playerModel";
// import playerData from "@/playerData";
const Players = require("@/Models/playerModel.js");
const playerData = require("@/playerData");

const data = playerData.player;
console.log("init running");
connect();
const initDB = async () => {
  await Players.deleteMany({});
  const res = await Players.insertMany({ data });
  console.log(res);
  console.log("data is initlized");
};
initDB();
