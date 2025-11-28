document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    swal({
        title: "Message Sent!",
        text: "Thank you for reaching out. We'll get back to you soon.",
        icon: "success",
        button: true
    }).then(() => {
        e.target.submit();
    });
});
