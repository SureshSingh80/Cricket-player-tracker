import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'


export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, password } = reqBody;
    
  
    // check username or password valid or not
    let validUser=false;
    let validPassword=false;
     
    if(username==='admin'){
       validUser=true;
    }
    
    if(password==='123..'){
       validPassword=true;
    }
    
    
  
    
  
    if(!validUser || !validPassword){
        
      return NextResponse.json(
        { error: "username or password invalid" },
        { status: 400 }
      );
    }
  
    const tokenData = {
      id:80,
      username: username,
      password: password
    };
  
    const token= jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:"1d"});
   

  
    let response = NextResponse.json({
      username: username,
      password: password,
    });
  
    response.cookies.set("token",token,{
      httpOnly:true
    });
   
     return response;
  } catch (error) {
      return NextResponse.json({error:error.message},{status:500});
  }
}
