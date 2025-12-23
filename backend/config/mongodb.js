import mongoose from "mongoose";

const connectDB = async ()=>{
    
    mongoose.connection.on('connected', ()=>console.log("Database Connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/Food-Delivery-App`)

}
export default connectDB;
// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI);

//     console.log("✅ Database Connected:", conn.connection.name);
//   } catch (error) {
//     console.error("❌ MongoDB Connection Error:", error.message);
//     process.exit(1); // stop server if DB fails
//   }
// };

// export default connectDB;
