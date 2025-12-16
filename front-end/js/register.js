registerForm.addEventListener("submit", function(e){
e.preventDefault();
if(password.value.length < 6){
alert("Password must be 6 characters");
}else{
alert("Registered successfully");
}
});
