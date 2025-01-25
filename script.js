function submit(){
let name1=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;



document.getElementById("output").innerHTML = 
  `Name: ${name1}<br>Email: ${email}<br>Message: ${message}`;
}
