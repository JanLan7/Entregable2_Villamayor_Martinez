document.addEventListener("DOMContentLoaded", function() {
    let frasesSesion = [];

    document.getElementById("botonCita").addEventListener("click", function() {
        let cita = citaFilosofica();
        document.getElementById("cita").innerText = cita;
        document.getElementById("mongex").classList.remove("d-none");
        reproducirAudio("meditaZAO.mp3");
        guardarFrase(cita);
    });

    document.getElementById("botonLibros").addEventListener("click", function() {
        let librosSe = librosSeleccion();
        document.getElementById("librosSe").innerText = librosSe;
        document.getElementById("librox").classList.remove("d-none");
        reproducirAudio("Page.mp3");
        guardarFrase(librosSe);
    });

    document.getElementById("botonChistes").addEventListener("click", function() {
        let chistesS = chistesSeleccion();
        document.getElementById("Ch").innerText = chistesS;
        document.getElementById("chistex").classList.remove("d-none");
        reproducirAudio("chistedrum.mp3");
        guardarFrase(chistesS);
    });

    document.getElementById("botonDiscos").addEventListener("click", function() {
        let discosS = discosSeleccion();
        document.getElementById("discosS").innerText = discosS;
        document.getElementById("discox").classList.remove("d-none");
        reproducirAudio("vinyl.mp3");
        guardarFrase(discosS);
    });

    document.getElementById("botonImprimir").addEventListener("click", function() {
        window.open("imprimir.html");
    });

    function citaFilosofica() {
        let frases = [ "\"Sócrates\": La vida no examinada no merece ser vivida.", "\"Aristóteles\": La felicidad depende de nosotros mismos.", "\"Descartes\": Pienso, luego existo.", "\"Nietzsche\": Lo que no nos mata nos hace más fuertes.", "\"Kant\": La razón es el origen de todo conocimiento.", "\"Platón\": El conocimiento verdadero es saber que no sabes nada.", "\"Confucio\": La mayor gloria no es nunca caer, sino levantarse siempre.", "\"Heráclito\": No puedes bañarte dos veces en el mismo río.", "\"Epicuro\": No es tanto el ayudar a nuestros amigos como el hacerlo con placer lo que nos hace felices.", "\"Séneca\": La felicidad es no necesitarla.", "\"Cicerón\": Si tienes un jardín y una biblioteca, tienes todo lo que necesitas.", "\"Sófocles\": La vida más dulce es no pensar en nada." ];
        let indiceAleatorio = Math.floor(Math.random() * frases.length);
        return frases[indiceAleatorio];
    }

    function librosSeleccion() {
        let libros = [ "\"Sapiens\": Una fascinante exploración de la historia humana, desde el origen hasta el futuro, ofreciendo profundas reflexiones sobre nuestra especie.", "\"Mil Cerebros\": Desentraña el funcionamiento del cerebro, proponiendo una teoría revolucionaria sobre cómo pensamos y percibimos el mundo.", "\"El Universo de la Nada\": Investiga cómo el universo surgió de la nada, desafiando nuestras creencias sobre la existencia y la realidad.", "\"Amplitud\": Examina cómo las organizaciones y las personas pueden prosperar en un mundo interconectado, enfatizando la importancia de la adaptabilidad.", "\"Meditaciones\": Reflexiones filosóficas del emperador Marco Aurelio, ofreciendo sabiduría atemporal sobre la vida, la virtud y la serenidad.", "\"Una Breve Historia de Casi Todo\": Un viaje a través del tiempo y el espacio, desentrañando los misterios del universo con humor y claridad.", "\"El Aleph\": Colección de cuentos de Borges, explorando infinitos, realidades paralelas y lo desconocido, con una prosa exquisita y profunda."];
        let indiceAleatorio = Math.floor(Math.random() * libros.length);
        return libros[indiceAleatorio];
    }

    function chistesSeleccion() {
        let chistes = [ "\"Chiste 1\": ¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.", "\"Chiste 2\": ¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.", "\"Chiste 3\": ¿Por qué los esqueletos no pelean entre ellos? Porque no tienen agallas.", "\"Chiste 4\": ¿Qué hace una abeja en el gimnasio? Zum-ba.", "\"Chiste 5\": ¿Cómo organizas una fiesta en el espacio? ¡Planeta!", "\"Chiste 6\": ¿Qué hace una vaca con los ojos cerrados? Leche concentrada.", "\"Chiste 7\": ¿Por qué las computadoras no pueden nadar? Porque tienen un ratón dentro.", "\"Chiste 8\": ¿Qué hace un perro con un taladro? Taladrando.", "\"Chiste 9\": ¿Cuál es el colmo de Aladdín? Tener mal genio.", "\"Chiste 10\": ¿Qué le dice una piedra a otra piedra? ¡Qué dura es la vida!", "\"Chiste 11\": ¿Por qué el libro de matemáticas está triste? Porque tiene demasiados problemas.", "\"Chiste 12\": ¿Cómo se despiden los químicos? Ácido un placer."];
        let indiceAleatorio = Math.floor(Math.random() * chistes.length);
        return chistes[indiceAleatorio];
    }

    function discosSeleccion() {
        let reseñasDeDiscos = [ "\"Kind of Blue\": Una obra maestra del jazz de Miles Davis, explorando la improvisación modal con un sonido único y evocador.", "\"A Love Supreme\": John Coltrane fusiona espiritualidad y música, creando un álbum trascendental y profundamente emotivo, lleno de intensidad y devoción.", "\"Djesse 3\": Jacob Collier despliega su genio musical en un álbum ecléctico, fusionando géneros con maestría y creatividad desbordante.", "\"We Live Here\": Pat Metheny Group ofrece una mezcla única de jazz, funk y world music, creando paisajes sonoros envolventes y sofisticados.", "\"Dark Side of the Moon\": Pink Floyd crea una obra atemporal, explorando temas profundos con innovaciones sonoras y producción impecable.", "\"Abbey Road\": The Beatles se despiden con un álbum icónico, lleno de armonías perfectas, melodías inolvidables y experimentación sonora.", "\"Innuendo\": Queen muestra su diversidad musical en un álbum poderoso y emotivo, lleno de mensajes profundos y momentos épicos.", "\"Off the Wall\": Michael Jackson fusiona disco, pop y funk en un álbum vibrante, estableciendo su legado como el Rey del Pop.", "\"El Amor Después del Amor\": Fito Páez ofrece una oda al amor y la vida en un álbum cargado de pasión, melancolía y genialidad lírica."];
        let indiceAleatorio = Math.floor(Math.random() * reseñasDeDiscos.length);
        return reseñasDeDiscos[indiceAleatorio];
    }

    function guardarFrase(frase) {
        // Para localStorage
        let frases = JSON.parse(localStorage.getItem("frases")) || [];
        frases.push(frase);
        while (frases.length > 4) {  // Mantener exactamente 4 elementos
            frases.shift();          // Eliminar elementos hasta tener 4
        }
        localStorage.setItem("frases", JSON.stringify(frases));
    
        // Para la sesión actual
        frasesSesion.push(frase);
        while (frasesSesion.length > 4) {  // Mantener exactamente 4 elementos
            frasesSesion.shift();          // Eliminar elementos hasta tener 4
        }
    }
    function reproducirAudio(ruta) {
        let audioPlayer = document.getElementById("audioPlayer");
        let audioSource = document.getElementById("audioSource");
        audioSource.src = ruta;
        audioPlayer.load();
        audioPlayer.play();
    }
});