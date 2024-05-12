import connection from "@/lib/db";
import Products from "@/lib/modals/products";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const { id, name, Ename, price, description } = await req.json();
    console.log(name);
    try {
        connection();
        if (name) {
            const update = await Products.findOneAndUpdate({ _id: id }, { name: name });
            console.log('new name arrived : ', update);
        }

        if (Ename) {
            const update = await Products.findOneAndUpdate({ _id: id }, { Ename: Ename });
        }
        if (price) {
            const update = await Products.findOneAndUpdate({ _id: id }, { price: price });
        }
        if (description) {
            const update = await Products.findOneAndUpdate({ _id: id }, { desc: description });

        }

        return new NextResponse(JSON.stringify({ message: 'done' }));
    } catch (error) {

    }
    return new NextResponse(JSON.stringify({ name, Ename, price, description }));

}

export async function DELETE(req, res) {
    const { id } = await req.json();
    try {
        const productsdel = await Products.findByIdAndDelete({ _id: id });
        console.log('deleted');
        return new NextResponse(JSON.stringify({ message: 'deleted', id }));
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: 'error, ', error }));
    }
}