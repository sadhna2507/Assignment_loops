// <--------------------------------------------1st QUESTION-------------------------------------------->


//   let n = parseInt(process.argv[2])
//    for(let i=0+1; i<n; i++){
//     if((i%2)!==0){
//       console.log(i);
//     }
//   }


// <--------------------------------------------1st QUESTION-------------------------------------------->
let a = parseInt(process.argv[2])
let b = parseInt(process.argv[3])
let sum=0;
for(i=a;i<=b;i++){
  if(i%2==0){
    sum+=i;
  }
}
console.log(sum);
