const mongoos=require('mongoose');
const mongoUri="mongodb://localhost:27017/?directConnection=true";
const connectToMongo=()=>{
    mongoos.connect(mongoUri,()=>{
        console.log("connected to mongoo successfully");
    })
}
module.exports=connectToMongo;