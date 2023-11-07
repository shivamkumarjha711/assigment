import mongoose from "mongoose";

const connnetionDB = async () => {
    try {
        const { connection } = await mongoose.connect(
            process.env.MONGO_URI
        )
        if (connection) {
            console.log(`connected to db: ${connection.host}`);
        }
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default connnetionDB;