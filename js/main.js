var userInput = document.getElementById("userInput");





userInput.addEventListener("keyup", function(e) {
    e.preventDefault();
    if (e.keyCode == 13) {
        document.getElementById("submitBtn").click();
    }
});







function getInfo() {
	var regEx = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;

	console.log(regEx.test(userInput.value));  

	userInput.value = "";	

}