
import {connect} from '@/dbconfig/dbconfig'
import { NextResponse } from 'next/server';
import Players from '@/Models/playerModel';

connect();

export async function POST(request){
     
     try {
        const reqBody=await request.json();
        const {id}=reqBody;
        
        const playerData=await Players.findById(id);
        console.log("PlayerData= ",playerData);

        const response=NextResponse.json({
            message:"success",
            data:playerData
        });

        return response;
     } catch (error) {
        return NextResponse.json({error:error.message},{status:500});
     }
}