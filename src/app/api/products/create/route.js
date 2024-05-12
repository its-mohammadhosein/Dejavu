import connection from '@/lib/db';
import Products from '@/lib/modals/products';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    await connection();
    try {
        const { name, Ename, price, description } = await req.json();
        console.log(name, Ename, price, description);
        const product = await Products.create({ name, Ename, price, desc: description });

        // product.save();
        return new NextResponse(JSON.stringify({ message: 'created' }));
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ error }));
    }
}
