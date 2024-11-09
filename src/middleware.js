
import { NextResponse } from 'next/server';


export default async function middleWare(request){

    

    const path = request.nextUrl.pathname;
    const token=request.cookies.get("token")?.value || '';

    
    

    const privatePath= path==="/dashboard" || path==="/addPlayer" || path==="/viewPlayer";
    if(privatePath && !token){
        return NextResponse.redirect(new URL("/admin", request.url));        
    }
}
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
      '/dashboard',
      '/addPlayer',
      '/viewPlayer'      
    ]
  };
  