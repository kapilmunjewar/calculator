function checkInput() {
    var x = document.getElementById("inputString").value;
    digits = x.split(/[*/+-]+/)
    check =1
    console.log(digits)
    for(i=0; i<digits.length;i++){
        if(isNaN(digits[i]) == true){
            console.log(digits[i])
            check = 0;
            break;
        }
    }
    if(digits[digits.length - 1] == ""){
        console.log("Verify your input string.")
    }else if(x[x.length-1] == '.'){
        console.log("Verify your input string.")
    }else if(check == 0){
        console.log("Verify your input string.")
    }else{
        console.log(digits)
        console.log( eval(x) );
        document.getElementById("resultString").value=eval(x);
    }
}

function addInput(e) {
    var x = document.getElementById("inputString").value;
    var res = x.concat(e);
    document.getElementById("inputString").value=res;
}


function addOperation(e) {
    var x = document.getElementById("inputString").value;
    if(x[x.length-1] == null){
        console.log("First character must be number.")
    }else if(x[x.length-1] == '/' || x[x.length-1] == '*' || x[x.length-1] == '+' || x[x.length-1] == '-'){
        x = x.replace(/.$/,e);
        document.getElementById("inputString").value = x;
    }else{
        if(x[x.length-1] == '.'){
            console.log("Enter number")
        }else{
            var res = x.concat(e);
            document.getElementById("inputString").value=res;
        }
    }
}

function addDot(e){
    var x = document.getElementById("inputString").value;
    if(isNaN(x[x.length-1]) == false){
        var res = x.concat(e);
        document.getElementById("inputString").value=res;
    }
}

function clearInput (){
    document.getElementById("inputString").value="";
}