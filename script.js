function checkPassword(){

    let password=document.getElementById("password").value;

    let strength=document.getElementById("strength");

    let score=0;

    if(password.length>=8){
        score++;
    }

    if(/[A-Z]/.test(password)){
        score++;
    }

    if(/[a-z]/.test(password)){
        score++;
    }

    if(/[0-9]/.test(password)){
        score++;
    }

    if(/[!@#$%^&*(),.?":{}|<>]/.test(password)){
        score++;
    }

    if(score<=2){
        strength.innerHTML="Weak Password";
        strength.style.color="red";
    }

    else if(score==3 || score==4){
        strength.innerHTML="Medium Password";
        strength.style.color="orange";
    }

    else{
        strength.innerHTML="Strong Password";
        strength.style.color="green";
    }

}
