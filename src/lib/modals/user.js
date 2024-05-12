import { Schema, model, models } from "mongoose";

const userschema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = models.User || model("User", userschema);

export default User;