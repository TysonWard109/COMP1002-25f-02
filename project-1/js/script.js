//Displays a comfirmation message when our feedback form in submitted
function submitFeedback(){
    const name = document.getElementById("name").value;

    if (name === ""){
        alert("Please enter your name before submitting.")
    } else {
        alert("Thank you for your feedback, " +name +"!");
    }
}