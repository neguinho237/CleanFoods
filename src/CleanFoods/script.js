document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("main div[id]");
        const navLinks = document.querySelectorAll("nav ul li a");

        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - document.querySelector("header").offsetHeight;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });
    
    const btnFeedback = document.querySelector(".btnF");
    const feedbackInput = document.querySelector(".inputT");

    if (btnFeedback) {
        console.log("Botão de feedback encontrado");
    } else {
        console.error("Botão de feedback não encontrado");
    }

    btnFeedback.addEventListener("click", function () {
        console.log("Botão clicado!");

        const feedback = feedbackInput.value.trim();  

        if (feedback === "") {
            console.log("Campo de feedback vazio!");
            alert("Por favor, escreva seu feedback!");
            return;
        }

        console.log("Feedback enviado com sucesso!");
        alert("Feedback enviado com sucesso!");

        document.querySelector(".comentarios").innerHTML = "<h3>Obrigado pelo seu feedback!</h3>";
    });
});


