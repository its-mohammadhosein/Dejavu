import connection from '@/lib/db';
import Products from '@/lib/modals/products';
import { NextResponse } from 'next/server';

export async function POST(req, res) {

    const { search } = await req.json();


    console.log(search);
    if (search) {
        await connection();

        try {
            const find = await Products.findOne({ Ename: search });
            // console.log(find);
            return new NextResponse(JSON.stringify(find));
        } catch (error) {
            console.log(error);
            return new NextResponse(JSON.stringify({ message: 'error', error }));
        }
    }
}
