// async function abc () {
//     await fs.promises.writeFile("q1.html", "hello");
//     let data = await fs.promises.readFile("index.html", "utf-8");
//     console.log(data);
//     return "how are you";
// }

// async function main() {
//     let data = await abc();
//     console.log(data);
// }
// main();
const fs=require("fs");
// function abc(){
//     return new Promise((res,rej)=>{
//         fs.promises.writeFile("q1.html","hello").then(()=>{
//             fs.promises.readFile("index.html", "utf-8").then((data)=>{
//                 console.log(data);
//             res("how are you?");
//             })
//         })
//     })
// }

// function main(){
//     return new Promise((resolve,reject)=>{
//         abc().then((data)=>{
//             console.log(data);
//         })
//     })
// }
// main();

async function abc(){
    await fs.promises.writeFile("q1.html","hello");
    let data=await fs.promises.readFile("q1.html", "utf-8");
    console.log(data);
    return "how are you?";
}
async function main(){
   let data= await abc();
   console.log(data);
}
main();