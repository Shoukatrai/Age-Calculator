var now = new Date()
var nowSeconds = now.getTime()

function ageCalc(){
    var result = document.getElementById("result")
    var input = document.getElementById("input");
    
    var birthYear = input.value;
    var birthYearSeconds = new Date(birthYear).getTime();
    
    var diff = nowSeconds - birthYearSeconds;
    var year =Math.floor( diff/(1000 * 60 * 60 * 24 *365))
    
    
    
    if(input.value.length === 0){
        result.innerHTML = "Please Enter any Date!";
        result.style.color = "red";
    }else{
        result.innerHTML = `You are ${year} years old!`;
        result.style.color = "white";
        result.style.textShadow = "1px 2px 15px white";
    }
}

