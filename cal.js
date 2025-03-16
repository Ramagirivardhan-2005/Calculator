let display=document.querySelector(".display");
let butn=document.querySelectorAll("button");
let input;
butn.forEach(btn=>{
    btn.onclick=()=>{
        let choice=btn.id;
        calculator(choice);
    }
});
const calculator=(choice)=>{
    if(choice==='addi'){
        display.innerText+='+ ';
        input+='+';
    }
    else if(choice=='subt'){
        display.innerText+='-';
        input+='-';
    }
    else if(choice=='multi'){
        display.innerText+='x ';
        input+='*';
    }
    else if(choice=='pii'){
        display.innerText+='π';
        input+='π';
        
    }
    else if(choice=='divi'){
        display.innerText+='÷';
        input+='/';
    }
    else if(choice=='expo'){
        display.innerText+='e';
        input+='e';

    }
    else if(choice=='zeroo'){

        display.innerText+='0';
        input+='0';
        
    }
    else if(choice=='brack11'){
        display.innerText+='(';
        input+='(';
    }
    else if(choice=='brack22'){

        display.innerText+=')';
        input+=')';
    }
    else if(choice=='per'){
        display.innerText+='%';
        input+='%';
    }
    else if(choice=='logo'){
        display.innerText+='log(';
        input+='log(';
    }
    else if(choice=='lnn'){
        display.innerText+='ln(';
        input+='ln(';
    }
    else if(choice=='dotu'){
        display.innerText+='.';
        input+='.';
    }
    else if(choice=='Alcl'){
        display.innerText="";
        input="";

    }
    else if(choice=='cl'){
        console.log("cl");
        let temp=display.innerText;
        display.innerText=temp.slice(0,-1);
        let xl=input;
        input=xl.slice(0,-1);
    }
    else if(choice=='1'){
        display.innerText+='1';
        input+='1';
        
    }
    else if(choice=='2'){
        display.innerText+='2';
        input+='2';
    }
    else if(choice=='3'){
        display.innerText+='3';
        input+='3';
    }
    else if(choice=='4'){
        display.innerText+='4';
        input+='4';
    }
    else if(choice=='5'){
        display.innerText+='5';
        input+='5';
    }
    else if(choice=='6'){
        console.log("6");
        display.innerText+='6';
        input+='6';
    }
    else if(choice=='7'){
        input+='7';
        display.innerText+='7';

    }
    else if(choice=='8'){
        console.log("8");
        display.innerText+='8';
        input+='8';
    }
    else if(choice=='9'){
        console.log("9");
        display.innerText+='9';
        input+='9';
    }
    else if(choice=='anss'){
        try {
            let result = FinalAnswer(input);
            display.innerText = result;
            input = result; 
        } catch (e) {
            display.innerText = 'Error';
        }
   }
    else if(choice=='sqrt'){
        console.log("√");
        display.innerText+='sqrt(';
        input+='sqrt(';
    }
    else if(choice=='powe'){
            console.log("^");
            display.innerText+='^';
            input+='**'
    }
    else{
        console.log("error")
        display.innerText="error";
    }
};
const FinalAnswer = (expr) => {
    expr = expr.replace(/π/g, Math.PI);
    expr = expr.replace(/e/g, Math.E);
    expr = expr.replace(/log\(([^)]+)\)/g, 'Math.log10($1)');
    expr = expr.replace(/ln\(([^)]+)\)/g, 'Math.log($1)');
    expr = expr.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
    expr = expr.replace(/(\d+)%/g, '($1 / 100)');
    expr = expr.replace(/\s+/g, '');
    try {
        return new Function('return ' + expr)();
    } catch (e) {
        throw new Error('Invalid expression');
    }
};