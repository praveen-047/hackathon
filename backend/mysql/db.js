import mysql from "mysql2/promise"

const connectDB = async ()=>{
    try {
        const db = await mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"tiger",
            database:"hackathon"
        })
        console.log("database connected successfully")
        return db;
    } catch (error) {
        console.log("database connection error :",error);
    }
}

export default connectDB