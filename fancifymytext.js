function buttonPush(value){
    if(value == "big")
        document.getElementById("message").style.fontSize = "24pt";
    else if(value == "moo"){
        x = document.getElementById("message").value;
        x = x.toUpperCase();
        x = addMoo(x);
        document.getElementById("message").value = x;
    }
}
function change(value){
    if(value == "fancy"){
        document.getElementById("message").style.fontWeight = "bold";
        document.getElementById("message").style.color = "blue";
        document.getElementById("message").style.textDecoration = "underline";
    }else if(value == "boring"){
        document.getElementById("message").style.fontWeight = "normal";
        document.getElementById("message").style.color = "black";
        document.getElementById("message").style.textDecoration = "none";
    }
}
function addMoo(str){
    i = 0;
    do{
        i++;
        strTest = str.charAt(str.length-i);
    }while(strTest.length === 1 && !strTest.match(/[a-z]/i))
    i--;
    return str = str.slice(0, str.length-i) + "Moo" + str.slice(str.length-i);
}