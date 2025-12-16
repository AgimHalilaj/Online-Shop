document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();
if(message.value.length < 5){
alert("Message too short");
}else{
alert("Message sent");
}
});
