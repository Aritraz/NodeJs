const fs = require("fs");
//const os = require("os");

//console.log(os.cpus().length);//op 12 means you can have maximum 12 threads inside your thread pool


//fs.writeFileSync("./demo.txt","This is a demo txt file");//SYnchronous operation means blocking operation
//this can be done using writeFile("path of te file","content",callback function) , this is non synchrounous means non blocking.

//This is blocking operation means synchronous
const file = fs.readFileSync("./demo.txt","utf-8");
console.log(file);

console.log("Processing")

//Non blocking means non synchronous
fs.readFile("./demo.txt","utf-8",(err,res)=>
{
    console.log(res);
});




