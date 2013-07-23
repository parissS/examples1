function notEmpty(){
    var myTextField = document.getElementById('maininput');
    if(myTextField.value != "")
        alert("You entered: " + myTextField.value)
    else
        alert("Would you please enter some text?")		
}