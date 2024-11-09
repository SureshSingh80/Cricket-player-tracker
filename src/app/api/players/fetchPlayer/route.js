import { NextResponse } from "next/server";
import Players from "@/Models/playerModel"
import {connect} from '@/dbconfig/dbconfig'

connect();

export async function GET() {
  // console.log("Get route working");

  try {

    const allPlayers = await Players.find();
    // console.log(allPlayers);
    const res=NextResponse.json({
       allPlayers
    });
    return res;

  } catch (error) {
      return NextResponse.json({error:error.message},{status:500});
      
  }
}
