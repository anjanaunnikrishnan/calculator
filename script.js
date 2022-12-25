function calculator(num){
console.log(num);
age.value+=num
}


function clearBox(){
    age.value="";
}


function evaluateExpression(){
    exp=age.value;//exp 7*8
    output=eval(exp);//56  evaluate expression
    age.value=output//



    //age.value=eval(age.value)

}


function removeLast(){
    currentexp=age.value;
    age.value=currentexp.slice(0,-1);//slice used to remove one by one
}