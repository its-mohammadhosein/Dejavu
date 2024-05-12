import connection from "@/lib/db";
import Products from "@/lib/modals/products";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    // const id = context.params.id;
    const id = params.id;
    console.log(params.id);
    try {
        connection();
        const data = await Products.findById(id);
        console.log(data);
        return new NextResponse(JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
    return new NextResponse(id);
}