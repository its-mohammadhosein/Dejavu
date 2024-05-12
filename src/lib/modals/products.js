import { Schema, model, models } from "mongoose";

const Productsschema = new Schema({
    name: { type: String, required: true, unique: true },
    Ename: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
});

const Products = models.Products || model("Products", Productsschema);

export default Products;