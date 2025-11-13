$(document).ready(function () {
    $("#message").hide();
    $(".contact-form").on("submit", function(e){
        e.preventDefault();

        let name = $("#initials").val().trim();
        let email = $("#email").val().trim();
        let confirmEmail = $("#confirm-email").val().trim();
        let phone = $("#phone").val().trim();
        let message =  $("#message")
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        let phonePattern = /^\d{11}$/;



        if(name === "" || email === "" || phone === ""){
            message.text("Please fill out all fields!").css("color", "Red").show();
            setTimeout(() => message.fadeOut(), 4000);
        }else if(!email.match(emailPattern)){
            message.html("Please enter a valid email!<br>example@gmail.com").css("color", "Red").show();
            setTimeout(() => message.fadeOut(), 4000);
        }else if(email !== confirmEmail){
            message.text("The emails don't match!").css("color", "Red").show();
            setTimeout(() => message.fadeOut(), 4000);
        }else if(!phone.match(phonePattern)){
            message.html("Please enter a valid phone number!<br>81234567890").css("color", "Red").show();
            setTimeout(() => message.fadeOut(), 4000);
        }else{
            message.html("Form submitted successfully!<br> We will contact you in 24h!").css({color: "green", lineHeight: "25px"}).show();
            setTimeout(() => message.fadeOut(), 4000);
            $("#initials").val("");
            $("#email").val("");
            $("#phone").val("");
        }
        
    })
});