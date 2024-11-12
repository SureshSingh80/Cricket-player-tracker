import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'


export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, password } = reqBody;

    const trimedUsername=username.trim();
    const trimedPassword=password.trim();
    
  
    // check username or password valid or not
    let validUser=false;
    let validPassword=false;

     
    if(trimedUsername==='admin'){
      console.log("ADMIN is true");
       validUser=true;
    }
    
    if(trimedPassword==='123..'){
      console.log("password is true");
       validPassword=true;
    }
    
    
  
    
  
    if(!validUser || !validPassword){
      console.log("Invalid username or password");
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
  
    const token=  jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:"1d"});
   

  
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
