document.addEventListener("DOMContentLoaded", function () {
    emailjs.init({
        publicKey: "8z0U-yfgaTKKlP0qe",
    });

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Formun sayfayı yenilemesini engelle

        // Form alanlarındaki değerleri al
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var subject = document.getElementById("subject").value.trim();
        var message = document.getElementById("message").value.trim();

        let serviceId = "service_kjnuu7g"; // EmailJs servis ID
        let tamplateId = "template_8wzqh23";

        var params = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };

        emailjs.send(serviceId, tamplateId, params)
            .then(res => {
                alert("Your message has been sent successfully!");

                // Alert tamamlandıktan sonra form temizleniyor
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
            })
            .catch(err => {
                console.error("EmailJS Error:", err);
            });
    });
});



/* function submitForm() {
    // Email formatını kontrol eden fonksiyon
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Form alanlarındaki değerleri al
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    if (email === "" || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let serviceId = "service_kjnuu7g" // EmailJs servis ID
    let tamplateId = "template_8wzqh23"

    var params = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    }
    emailjs.send("service_kjnuu7g", "template_8wzqh23", params)
        .then(res => {
            alert("Your message has been sent successfully!");
        })
        .catch(err => {
            console.error("EmailJS Error:", err);
        });
} */