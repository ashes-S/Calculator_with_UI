//screen shortcut
var screen = document.getElementsByClassName("screen")[0];
//var for screen content
var array = [];
screen.innerText=array;

//calculation material(vars)
var arithSign;
let minusClick=0;
var dot = 0;


//function to update screen text
function screenText(){
    screen.innerText = array.join('');    
}

//ADD BUTTON
document.querySelector(".add").addEventListener("click", function(){
    if(array.slice(0,1)=="-" && array.slice(1,2)==""){}

    else if(array.slice(0,1)==""){}

    else{
    //for calculation
    arithSign = "+";   

    //for screen 
    array.push("+");
    screenText();

    //for dot
    document.querySelector(".dot").classList.remove("disable");
    dot--;

    //for only pressing signs once
    document.querySelector(".add").classList.add("disable");
    document.querySelector(".multiply").classList.add("disable");
    document.querySelector(".divide").classList.add("disable");
    }
})

//SUBTRACT BUTTON
document.querySelector(".subtract").addEventListener("click", function(){
    if(array.slice(0,1)==""){
        //for calculation
        arithSign = "-";   

        //for screen
        array.push("-");
        screenText();

        //if minus pressed couple times
        minusClick++;
    }

    else if(array.slice(1,2)!="" && array.slice(0,1)=="-" && minusClick<2){
        //for calculation
        arithSign = "-";   

        //for screen
        array.push("-");
        screenText();

        //if minus pressed couple times
        minusClick++;

        //for dot
        document.querySelector(".dot").classList.remove("disable");
        dot--;
        
        //for only pressing signs once
        document.querySelector(".add").classList.add("disable");
        document.querySelector(".subtract").classList.add("disable");
        document.querySelector(".multiply").classList.add("disable");
        document.querySelector(".divide").classList.add("disable");
    }

    else if(array.includes("+")==0 && array.slice(1,2)!="" && minusClick<=1 && array.includes("/")==0 && array.includes("x")==0){
        //for calculation 
        arithSign = "-";   

        //for screen
        array.push("-");
        screenText();

        //if minus pressed couple times
        minusClick++;

        //for dot
        document.querySelector(".dot").classList.remove("disable");
        dot--;

        //for only pressing signs once
        document.querySelector(".add").classList.add("disable");
        document.querySelector(".subtract").classList.add("disable");
        document.querySelector(".multiply").classList.add("disable");
        document.querySelector(".divide").classList.add("disable");
    }

    else if(array.slice(0,1)!="-" && array.slice(1,2)==""){
        //for calculation 
        arithSign = "-";   

        //for screen
        array.push("-");
        screenText();

        //if minus pressed couple times
        minusClick++;

        //for dot
        document.querySelector(".dot").classList.remove("disable");
        dot--;

        //for only pressing signs once
        document.querySelector(".add").classList.add("disable");
        document.querySelector(".subtract").classList.add("disable");
        document.querySelector(".multiply").classList.add("disable");
        document.querySelector(".divide").classList.add("disable");
    }
    
    else if(array.slice((array.indexOf("/")+1),array.indexOf("/")+2)=="" || array.slice((array.indexOf("x")+1),array.indexOf("x")+2)=="" || array.slice((array.indexOf("+")+1),array.indexOf("+")+2)==""){
        //for calculation 
        arithSign = "-";   

        //for screen
        array.push("-");
        screenText();

        //if minus pressed couple times
        minusClick++;

        //for dot
        document.querySelector(".dot").classList.remove("disable");
        dot--;

        //for only pressing signs once
        document.querySelector(".add").classList.add("disable");
        document.querySelector(".subtract").classList.add("disable");
        document.querySelector(".multiply").classList.add("disable");
        document.querySelector(".divide").classList.add("disable");
    } 
    
})

//MULTIPLY BUTTON
document.querySelector(".multiply").addEventListener("click", function(){

    if(array.slice(0,1)=="-" && array.slice(1,2)==""){}

    else{
    //for calculation
    arithSign = "x";   

    array.push("x");
    screenText();

    //for dot
    document.querySelector(".dot").classList.remove("disable");
    dot--;

    //for only pressing signs once
    document.querySelector(".add").classList.add("disable");
    document.querySelector(".multiply").classList.add("disable");
    document.querySelector(".divide").classList.add("disable");
    }
})

//DIVIDE BUTTON
document.querySelector(".divide").addEventListener("click", function(){
    if(array.slice(0,1)=="-" && array.slice(1,2)==""){}

    else{
    //for calculation 
    arithSign = "/";   

    array.push("/");
    screenText();

    //for dot
    document.querySelector(".dot").classList.remove("disable");
    dot--;

    //for only pressing signs once
    document.querySelector(".add").classList.add("disable");
    document.querySelector(".multiply").classList.add("disable");
    document.querySelector(".divide").classList.add("disable");
    }
})


//dot
document.querySelector(".dot").addEventListener("click", function(){
    //to be used twice
    if(dot<1){
        array.push(".");
        screenText();
        document.querySelector(".dot").classList.add("disable");
        dot++
    }
})



//numbers
document.getElementsByClassName("numb")[0].addEventListener("click", function(){
    array.push("7");
    screenText();
})

document.getElementsByClassName("numb")[1].addEventListener("click", function(){
    array.push("8");
    screenText();
})
document.getElementsByClassName("numb")[2].addEventListener("click", function(){
    array.push("9");
    screenText();
})
document.getElementsByClassName("numb")[3].addEventListener("click", function(){
    array.push("4");
    screenText();
})
document.getElementsByClassName("numb")[4].addEventListener("click", function(){
    array.push("5");
    screenText();
})
document.getElementsByClassName("numb")[5].addEventListener("click", function(){
    array.push("6");
    screenText();
})
document.getElementsByClassName("numb")[6].addEventListener("click", function(){
    array.push("1");
    screenText();
})
document.getElementsByClassName("numb")[7].addEventListener("click", function(){
    array.push("2");
    screenText();
})
document.getElementsByClassName("numb")[8].addEventListener("click", function(){
    array.push("3");
    screenText();
})
document.getElementsByClassName("numb")[9].addEventListener("click", function(){
    array.push("0");
    screenText();
})


//delete
document.querySelector(".dlt").addEventListener("click", function(){    
    //to edit on screen
    var dlt = array.pop(array.length-1);
    screen.innerText=array.join('');

    if(dlt=="-" || dlt=="+" || dlt=="x" || dlt=="/"){
        document.querySelector(".add").classList.remove("disable");
        document.querySelector(".multiply").classList.remove("disable");
        document.querySelector(".divide").classList.remove("disable");

        if(dlt=="-"){

            if(array.slice(array.lastIndexOf("-")-1,array.lastIndexOf("-"))=="+" || array.slice(array.lastIndexOf("-")-1,array.lastIndexOf("-"))=="x" || array.slice(array.lastIndexOf("-")-1,array.lastIndexOf("-"))=="/" && array.lastIndexOf("-")>1){
                document.querySelector(".add").classList.add("disable");
                document.querySelector(".subtract").classList.remove("disable");
                document.querySelector(".multiply").classList.add("disable");
                document.querySelector(".divide").classList.add("disable");
            }

            else{
                document.querySelector(".subtract").classList.remove("disable");
            minusClick--;
            }
        }
    }
    
    else if(dlt=="."){
        dot--;
        document.querySelector(".dot").classList.remove("disable");
    }

})


//AC (clear - resetting everything)
document.querySelector(".clear").addEventListener("click", function(){
    //array empty
    array = [];
    //screen empty
    screen.innerText=array;  
    //property remove  
    document.querySelector(".add").classList.remove("disable");
    document.querySelector(".subtract").classList.remove("disable");
    document.querySelector(".multiply").classList.remove("disable");
    document.querySelector(".divide").classList.remove("disable");
    document.querySelector(".dot").classList.remove("disable");
})


//CALCULATE
document.querySelector(".calc").addEventListener("click",function(){
    if(array.indexOf("+")>0){calcScreen(add());}
    else if(array.indexOf("x")>0){calcScreen(multiply());}
    else if(array.indexOf("/")>0){calcScreen(divide());}
    else if(array.indexOf("-")>=0){calcScreen(subtract());}
})

//functions for arithmetic calculations

//MAIN SCREEN FUNCTION
function calcScreen(answer){
    array = [];
    array.push(answer);
    screen.innerText=answer;document.querySelector(".add").classList.remove("disable");
    document.querySelector(".subtract").classList.remove("disable");
    document.querySelector(".multiply").classList.remove("disable");
    document.querySelector(".divide").classList.remove("disable");
    document.querySelector(".dot").classList.remove("disable");
}

    //addition
function add(){
    var pos = array.indexOf("+");
    var startNumb = Number(array.slice((0),(pos)).join(''));
    var endNumb = Number(array.slice((pos+1),(array.length)).join(''));
    var result = startNumb + endNumb;
    return result;
}

function subtract(){
    var pos = array.indexOf("-");
    if(pos==0){pos=array.indexOf("-",[1])}

    var startNumb = Number(array.slice((0),(pos)).join(''));
    var endNumb = Number(array.slice((pos+1),(array.length)).join(''));
    var result = startNumb - endNumb;
    return result;
}

function multiply(){
    var pos = array.indexOf("x");
    var startNumb = Number(array.slice((0),(pos)).join(''));
    var endNumb = Number(array.slice((pos+1),(array.length)).join(''));
    var result = startNumb * endNumb;
    return result;
}

function divide(){
    var pos = array.indexOf("/");
    var startNumb = Number(array.slice((0),(pos)).join(''));
    var endNumb = Number(array.slice((pos+1),(array.length)).join(''));
    var result = startNumb / endNumb;
    return result;
}



//Adding keyboard link
document.addEventListener("keydown", function(event){
    let keyBtn=event.key;
    if(keyBtn=="Backspace"){document.querySelector(".dlt").click();}
    else if(keyBtn=="+"){document.querySelector(".add").click();}
    else if(keyBtn=="-"){document.querySelector(".subtract").click();}
    else if(keyBtn=="*"){document.querySelector(".multiply").click();}
    else if(keyBtn=="/"){document.querySelector(".divide").click();}
    else if(keyBtn=="=" || keyBtn=="Enter"){document.querySelector(".calc").click();}
    if(keyBtn=="."){document.querySelector(".dot").click();}
    else{
        for(let i=0; i<10; i++){
            if(i==keyBtn){
                document.querySelector(".num"+i).click();
                break;
            }
        }
    }
})
