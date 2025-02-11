console.log('Hello World');
//o.p => Hello world


//These two will give error here , although if you execute it in browser it will work , why?
console.log(window);
alert("Hi");
//Node js was designed to work with server side , so when vat engine was embedded with c++ , 
// all the client side features like dom , window object these were removed from it as it is not 
// required in the server side programming , Thats why it wont work here.
//at the same time they added some other features like bcrypt(Used for encryption , decryption) into 
// it as it is needed in the server sode.



//NPM -> Node Package Manager