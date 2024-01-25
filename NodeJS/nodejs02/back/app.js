const express = require("express")
const app = express()
require('dotenv').config()
// const Course = require("./models/Course");
const {createUaser, getAllUsers, getCustomUser, updateUser, deleteUser} = require("./controllers/userControllers")

app.use(express.json())



const mongoose = require("mongoose")
mongoose
.connect(`${process.env.MONGO_DB_URL}`)
.then(()=>console.log(`Connected to MongoDB`))
.catch((err)=>console.log(err))

app.post("/api/users", createUaser)
app.get("/api/users", getAllUsers)
app.get("/api/users/:id", getCustomUser)
app.put("/api/users/:id", updateUser)
app.delete("/api/users/:id", deleteUser)



// const createReacord = async()=>{
//     const record = await Course.create({
//         title: "javascript",
//         author:"jonas",
//         modules:["database", "Javascript"]
//     })
//     console.log(record);
// }
// // createReacord()

// const saveRecord = async()=>{
//     const course = new Course({
//         title: "javascript",
//         author:"jonas",
//         modules:["database", "Javascript"]
//     })
//     const result =await course.save()
//     console.log(result);
// }
// // saveRecord()
// const getAllCourses = async()=>{
//     const allCourses = await Course.find();
//     console.log(allCourses);
// }
// // getAllCourses()

// const getCustomCourse = async (id)=>{
//     const course = await Course.findById(id)
//     console.log(course);
// }
// // getCustomCourse("65b21f578f2dd8f942ff08f1")

// const getByAuthor= async(myauthor)=>{
//     const course = await Course.findOne({author: myauthor})
//     console.log(course);
// }
// // getByAuthor('jonas')

// const updateCourse = async (id)=>{
//     const course = await Course.findById(id)

//     if(!course){
//         return
//     }
//     course.modules.push("TypeScript")
//     const result = await course.save()
//     console.log(result);
// }
// // updateCourse("65b21e3ba9b75a8c91987a41")

// const deleteOne=async(id)=>{
//     const course = await Course.deleteOne({_id: id})
//     console.log(course);
// }
// // deleteOne('65b21e3ba9b75a8c91987a41')

// const deleteManyCourses = async(myauthor)=>{
//     const course = await Course.deleteMany({author: myauthor})
//     console.log(course);
// }
// // deleteManyCourses("jonas")

app.listen(process.env.PORT, ()=>{
    console.log("running om port " + process.env.PORT);
})

