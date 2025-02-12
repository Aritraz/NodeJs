const http = require("http"); // Predefined module , using it we create servers
const fs = require("fs");


const myServer = http.createServer((req,res)=>{

    //console.log("New request received");
    const log = `${Date.now()} - new request received\n`;
    // console.log(req);
    fs.appendFile("./log.txt",log,(err , data)=>
    {
       switch(req.url)
       {
        case '/' : res.end("This is home page");break;
        case '/about': res.end("This is about page");break;
        case '/contact-us': res.end("This is Contact-Us page");break;
        default :  res.end("404");
       }
    });
    

});//We should have a handler method to process incoming request into this server .
//This createServer() takes a callback , to process the incoming requests.


//Now to run this server we need a port.
myServer.listen(8000 , ()=>
{
   console.log("Server Started");
})