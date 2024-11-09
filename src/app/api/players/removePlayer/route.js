import { NextResponse } from "next/server";
import Players from "@/Models/playerModel";
import {connect} from '@/dbconfig/dbconfig'


connect();


export  async function POST(request){
      console.log("remove player route working");
      try {
        const reqBody=await request.json();
        const {id}=reqBody;
        const delData=await Players.findByIdAndDelete(id);
        console.log("DeletedData=",delData);

        const response=NextResponse.json({
            message:"deleted successfully"
         });

         return response;
   

      } catch (error) {
         return NextResponse.json({error:error.message},{status:500});
      }
      
      

      
    

      return response;
}