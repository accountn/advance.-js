let bonous = 15;
function sum(first,second){
   let result = first + second + bonous;
   if(result > 9){
       var mood = 'happy';
       
       console.log(mood);
   }
   //console.log(bonous);
   console.log(mood);
   return result;
}
const output = sum(5,7);

// console.log(bonous);
// console.log(output);