import { NextRequest, NextResponse } from 'next/server';
import { RegisterSchema } from '@/validations/RegisterSchema';
import { ValiError, flatten } from 'valibot';
export  async function POST(request:NextRequest) {
    try {
        const data = await request.json()
        RegisterSchema.parse(data);
        return NextResponse.json({message:"User Sucessfully Created",data},{status:200})
    } catch (error:any) {
        if(error instanceof ValiError ){
            
            return NextResponse.json({message:"Validation Error!",error:flatten(error).nested},{status:400})
        }
        return NextResponse.json({message:error,},{status:501})
    }
}