import { connect } from "@/dbconfig/dbconfig";
import { NextResponse } from "next/server";
import Players from "@/Models/playerModel";

connect();
export async function POST(request) {
  
  console.log("All player route working");
  try {
    const reqBody = await request.json();
    console.log("Player Data=", reqBody);
    const {
      name,
      age,
      nationality,
      gender,
      role,
      battingOrder,
      battingStyle,
      image,
      contactNo,
    } = reqBody;

    // console.log("name= ", typeof name);
    // console.log("age= ", typeof age);
    // console.log("nationality= ", typeof nationality + " " + nationality);
    // console.log("gender= ", typeof gender + " " + gender);
    // console.log("role= ", typeof role + " " + role);
    // console.log("battinOrder= ", typeof battingOrder + " " + battingOrder);
    // console.log("battingStyle= ", typeof battingStyle + " " + battingStyle);
    // console.log("image= ", typeof image);
    // console.log("contactNo= ", typeof contactNo);

    const newPlayer = new Players({
      name,
      age,
      nationality,
      gender,
      role,
      battingOrder,
      battingStyle,
      image,
      contactNo,
    });

    const savedPlayer = await newPlayer.save();
    console.log("Saved Data is", savedPlayer);

    const res = NextResponse.json({
      message: "Player added successfully in database",
    });
    return res;
  } catch (error) {}
}
