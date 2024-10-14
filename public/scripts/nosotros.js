    const texts = [
        "DISEÑAMOS PRODUCTOS QUE IMPACTEN EN LAS PERSONAS",
        "John Zorrilla",
        "Lucero Changra",
        "Jeremy Bailón"
    ];

    const subtexts = [
        "Software de calidad para tu negocio",
        "Desarrollador de Software",
        "Desarrollo de Software",
        "Diseñador"
    ];

    const backgroundColors = [
        "#0D1B2A", // Color oscuro inicial
        "#f7f7f7", // Crema para "John Zorrilla"
        "#db6040", 
        "#313131"  
    ];

    const textColors = [
        "white", // Texto blanco
        "#313131", // Texto negro para "John Zorrilla"
        "white", // Texto blanco
        "f7f7f7"  // Texto blanco
    ];

    const subtextColors = [
        "white", // Subtexto blanco
        "#313131", // Subtexto negro para "John Zorrilla"
        "white", // Subtexto blanco
        "f7f7f7"  // Subtexto blanco
    ];

    let currentIndex = 0;
    const textElement = document.getElementById("animated-text");
    const subtextElement = document.getElementById("animated-subtext");
    const bodyElement = document.getElementById("main-body");

    function typeWriter(text, element, delay = 100, callback) {
        element.innerHTML = "";
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, delay);
            } else if (callback) {
                callback(); // Llama al callback cuando termina de escribir
            }
        }
        type();
    }

    function changeText() {
        textElement.classList.remove('animate-fadeInUp');
        subtextElement.classList.remove('animate-fadeInUp');

        setTimeout(() => {
            // Actualiza el color de fondo y texto
            bodyElement.style.background = backgroundColors[currentIndex];
            bodyElement.style.color = textColors[currentIndex];
            subtextElement.style.color = subtextColors[currentIndex]; // Cambia también el color del subtexto
            
            // Actualiza el texto principal con efecto de tipado y espera a que termine
            typeWriter(texts[currentIndex], textElement, 100, () => {
                // Después del tipado, actualiza el subtexto
                subtextElement.innerHTML = subtexts[currentIndex];
                
                textElement.classList.add('animate-fadeInUp');
                subtextElement.classList.add('animate-fadeInUp');

                currentIndex++;

                // Si se completa el ciclo, redirige a la página de inicio
                if (currentIndex >= texts.length) {
                    setTimeout(() => {
                        window.location.href = "index.html"; // Redirige al inicio
                    }, 4000); // Espera 4 segundos después del último texto
                } else {
                    // Después de que el texto se haya escrito completamente, esperamos 4 segundos para pasar al siguiente
                    setTimeout(changeText, 4000);
                }
            });
        }, 500); // Pausa antes de cambiar el texto
    }

    // Mostrar primero el subtítulo "Conoce a nuestro equipo..." durante 1 segundo antes de cambiar el texto
    setTimeout(() => {
        // Iniciar la animación de textos después de mostrar "Conoce a nuestro equipo..."
        changeText();
    }, 1000); // Espera 1 segundo antes de iniciar la rotación de textos

