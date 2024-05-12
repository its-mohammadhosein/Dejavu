import connection from '@/lib/db';
import Products from '@/lib/modals/products';
import { NextResponse } from 'next/server';
export async function GET(req, res) {
    await connection();
    try {
        const allproducts = await Products.find();
        // console.log(allproducts);
        return new NextResponse(JSON.stringify({ allproducts }));
    } catch (err) {

    }
}