function name(){
    console.log("this is function");
}
// name()

function sum(num1,num2){  // parameter
    // console.log(num1+num2);   
    let res = num1+num2;
    return res;
    console.log("razza");   // after return next line will not work
    
}
const result = sum(4,6)  //arguments
// console.log("result",result);




function loginUserMassage(username){
    // if(username==undefined) or
    if(!username){   // when the argument will not pass from caller
        console.log("please enter a username");
        return
    }
    return `${username} logged in`
}

const store=loginUserMassage()
console.log(store);
