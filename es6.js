//es6 ->ecma script 6 standard
//1.var,let,const=>refer variable code of javascript
//2.arrow function
/*let fun=()=>{
    console.log("HELL0 EVRYONE");
}fun()
var fun=()=>{
    console.log("HELLO EVRYONE");
}
fun()
const fun3=()=>{
    console.log("HELLO EVRYONE");
}fun3()*/
// destructuring opeartr
var array = [10,20,30,40,50]
var [a,b,c,d,e]=array
console.log(a,b,c,d,e)

//spread operator
var array2=[10,20,30,40,50]
var array1=[...array2,60,70]
console.log(array1)
//... refers infinite variable
//arrow function is very easy way / compact way of function
//examples more:
const add1 = (a, b) => {
    return a + b;
  };
  console.log(add1(3,4))
  const add = (a, b) => a + b;
  console.log(add(100,567))
//promise using arrow function
function upload(message)
{
    return new Promise((success,failure)=>{
        console.log(message);
        const timeforupload = Math.random()<0.5;
        setTimeout(()=>{
            if(timeforupload)
            {
                success("File uploaded successfully");
            }
            else
            {
                failure("File upload failed");
            }
        },2000);
    });
}
upload("Upload button clicked succesfully").then((finemessage)=>{
    console.log(finemessage);
})
.catch((notfine)=>{
    console.log(notfine);
})


