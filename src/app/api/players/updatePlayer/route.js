import { connect } from "@/dbconfig/dbconfig";
import Players from "@/Models/playerModel";
import { NextResponse } from "next/server";

connect();
export async function POST(request) {
  try {
    const reqBody = await request.json();
    console.log("Player Data=", reqBody);
    const {
      id,
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

    const updatedData = await Players.findByIdAndUpdate(id, {
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
    console.log("Updated Data= ", updatedData);
    

    const response = NextResponse.json({
      message: "updated successfully",
      data: updatedData,
    });

    return response;
    
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 405 });
  }
}
