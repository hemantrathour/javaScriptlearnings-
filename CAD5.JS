//SCOPES

// var c = 300;
// if(true){
//     let a = 10
//     const b = 20
//     // c = 30;
//     console.log("INNEER:", a);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const username = "sanju";
//     function two(){
//         const website = "youtube";
//         console.log(username);
//     }
//    // console.log(website);
//     two();
// }
// one();

// if(true){
//     const username = "sanju";
//     if(username === "sanju"){
//         const website = "youtube";
//         console.log(username + website);
//     }
//    // console.log(website);
// }
// //console.log(username);

// +++++++++++++++++interesting+++++++++++++++++++++

console.log(addone(5));
 
function addone(num){
    return num+1;
}

addtwo(5)
const addtwo = function(num){
    return num+2
}