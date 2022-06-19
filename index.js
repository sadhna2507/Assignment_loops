// <--------------------------------------------1st QUESTION-------------------------------------------->


//   let n = parseInt(process.argv[2])
//    for(let i=0+1; i<n; i++){
//     if((i%2)!==0){
//       console.log(i);
//     }
//   }


// <--------------------------------------------2nd QUESTION-------------------------------------------->


// let a = parseInt(process.argv[2])
// let b = parseInt(process.argv[3])
// let sum=0;
// for(i=a;i<=b;i++){
//   if(i%2==0){
//     sum+=i;
//   }
// }
// console.log(sum);


// <--------------------------------------------5th QUESTION-------------------------------------------->


// let a = parseInt(process.argv[2])
// let b = parseInt(process.argv[3])
// let product = 1;
// for(let i = a;i<=b ;i ++){
//   let checking = Math.floor(i/10);
//      if(i%2==0 && checking%10==4){
//     product = product * i;
//     }
// }
// if(product ==1 ){
//  console.log(0);
// }else{
//     console.log(product);
//   }

// <--------------------------------------------4th QUESTION-------------------------------------------->


// let num = 153;
//  let firstDigit = Math.floor(num/100);
//  let secondDigit = Math.floor((num%100)/10);
//  let lastDigit = ((num%100)%10);
// let armstrong = firstDigit**3 + secondDigit**3 + lastDigit**3 
//  if( armstrong == num){
//   console.log("Its an armstrong number");
//  }else{
//   console.log("Its not a  armstrong number");
//  }


// <--------------------------------------------3RD QUESTION-------------------------------------------->


function even_digits(num) {
    let ctr = 0;
    while (num) {
      ctr += num % 2 === 0;
      num = Math.floor(num / 10);
    }
    return ctr;
  }
  
  console.log(even_digits(123));
  console.log(even_digits(1020));
  console.log(even_digits(102));


// <--------------------------------------------7th QUESTION-------------------------------------------->

// let rev = 0;
// let num = 167;
// let lastDigit;


// while(num != 0){
// 	lastDigit = num % 10;
//   rev = rev * 10 + lastDigit;
//   num = Math.floor(num/10);
  
// }
// if(rev===num){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }
// console.log("Reverse number : "+rev);