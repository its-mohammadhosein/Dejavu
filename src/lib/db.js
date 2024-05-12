import mongoose, { connect } from "mongoose";
const mongdburl = process.env.DATABASE_URL;

const connection = async () => {
    const checkconnection = mongoose.connection.readyState;
    if (checkconnection === 1) {
        console.log(`'we've connected`);
        return;
    }
    if (checkconnection === 2) {
        console.log(`connecting...`);
        return;
    }
    try {
        mongoose.connect(mongdburl, {
            dbName: "new",
            bufferCommands: false
        });
        console.log(`connected`);
    } catch (error) {
        console.log(error);
    }
};


export default connection;