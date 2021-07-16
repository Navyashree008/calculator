function solve(){
    var screen = document.getElementById("screen");
    var a = screen.value 
    var output = eval(a)
    screen.value = output

}

function display(value){
    // var str = ""
    var screen = document.getElementById("screen");
    screen.value += value
}

function clearAll(){
    console.log("nnn")
    var screen = document.getElementById("screen");
    screen.value = ""
}
 