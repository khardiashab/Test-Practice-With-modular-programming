import mongoose from "mongoose";

class DbConnection {
  static async connection(){
    const uri = process.env.MONGO_URI;
    try {
      // mongoose.set({})
      await mongoose.connect(uri)
      console.log("Db connected ...")
    } catch (error) {
      console.log(error)
      throw Error("There is Error in connecting db=> ", error.message)
    }
  }
}

export default DbConnection;