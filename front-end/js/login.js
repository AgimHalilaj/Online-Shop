loginForm.addEventListener("submit", function(e){
e.preventDefault();
if(password.value.length < 6){
alert("Password too short");
}else{
alert("Login successful");
}
});
