// import { PrismaClient } from "@prisma/client"
import prisma from "@/utils/connect";
import { NextResponse } from "next/server"


// const prisma = new PrismaClient();

// GET ALL orders
export const GET = async () => {
  try {
    const products = await prisma.product.findMany();
    return new NextResponse(JSON.stringify(products), { status: 200} );

  } catch (err) {
    console.log("alexa play mass  apleal")
    return new NextResponse(JSON.stringify({message:"Something broke"}), { status: 500} );
    
  }
}

