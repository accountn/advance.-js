//falsy:
//0
//false
//undefined
//""
//null
//NaN
//Truthy:
//" ","0",[],{}


const name = 11;
if(name || name == 0){
    console.log('condition is true');
}
else{
    console.log("condition is not true");
}