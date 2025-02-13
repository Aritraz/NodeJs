const express = require("express");

const app = express();
const PORT=7000;
//Basic routing
//app.METHOD(PATH,HANDLER)
app.get('/',(req,res)=>{return res.send("Hello , This is home page")});
app.get('/about',(req,res)=>{return res.send("Hello , This is About Page"+" You are "+ req.query.age+" years old")});
//localhost:7000/about?age=24
//req.quesry.age will give you the value of tyhe query parameter age.
//output : Hello , This is About Page You are 23 years old
//Using http you have to import url to handle the query parameters , but express have its 


//express internally uses http module to create sserver so we dont need to write
//http.createServer(app);
app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`);
})