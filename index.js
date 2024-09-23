function Faulty(a, b){
    var R = Math.random();
    console.log(R);
    if(R <= 0.1){
        var Sum = a - b;
        var diff = a / b;
        var multi = a + b;
        var div = a ** b;
    }
    else{
        
        var Sum = a + b;
        var diff = a - b;
        var multi = a * b;
        var div = a / b;
    }
    return [Sum, diff, multi, div];
}
let a = 15;
let b = 5;
console.log("The Sum, Difference, Multiplication, division between a and b are: ", Faulty(a,b), "Respectively");