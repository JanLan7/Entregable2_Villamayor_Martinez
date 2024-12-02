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
        let frases = [
            "\"Sócrates\": La vida no examinada no merece ser vivida.",
            "\"Aristóteles\": La felicidad depende de nosotros mismos.",
            "\"Descartes\": Pienso, luego existo.",
            "\"Nietzsche\": Lo que no nos mata nos hace más fuertes.",
            "\"Kant\": La razón es el origen de todo conocimiento.",
            "\"Platón\": El conocimiento verdadero es saber que no sabes nada.",
            "\"Confucio\": La mayor gloria no es nunca caer, sino levantarse siempre.",
            "\"Heráclito\": No puedes bañarte dos veces en el mismo río.",
            "\"Epicuro\": No es tanto el ayudar a nuestros amigos como el hacerlo con placer lo que nos hace felices.",
            "\"Séneca\": La felicidad es no necesitarla.",
            "\"Cicerón\": Si tienes un jardín y una biblioteca, tienes todo lo que necesitas.",
            "\"Sófocles\": La vida más dulce es no pensar en nada.",
            "\"Lao Tsé\": Un viaje de mil millas comienza con un solo paso.",
            "\"Hume\": La belleza no está en las cosas, sino en la mente que las contempla.",
            "\"Spinoza\": La paz no es la ausencia de guerra, sino una virtud nacida de la fuerza del alma.",
            "\"Voltaire\": La duda es incómoda, pero la certeza es ridícula.",
            "\"Rousseau\": El hombre nace libre, pero en todas partes está encadenado.",
            "\"Heidegger\": La esencia del ser humano es su existencia.",
            "\"Sartre\": El hombre está condenado a ser libre.",
            "\"Camus\": La única manera de lidiar con un mundo sin libertad es convertirse en tan absolutamente libre que tu mera existencia sea un acto de rebelión.",
            "\"Bacon\": El conocimiento es poder.",
            "\"Locke\": La mente es como un papel en blanco.",
            "\"Hobbes\": El hombre es lobo para el hombre.",
            "\"Pascal\": El corazón tiene razones que la razón no entiende.",
            "\"Marx\": Los filósofos han interpretado el mundo de diferentes maneras; de lo que se trata es de transformarlo.",
            "\"Engels\": La libertad no consiste en soñar con independencia abstracta, sino en vivir las condiciones reales con conocimiento.",
            "\"Schopenhauer\": La vida oscila como un péndulo entre el dolor y el aburrimiento.",
            "\"Leibniz\": Este es el mejor de los mundos posibles.",
            "\"Heidegger\": El lenguaje es la casa del ser.",
            "\"Hegel\": La verdad es el todo.",
            "\"Diógenes\": Soy ciudadano del mundo.",
            "\"Zaratustra\": El hombre es una cuerda tendida entre el animal y el superhombre.",
            "\"Plotino\": La belleza no se encuentra en los objetos, sino en el acto de verlos.",
            "\"Kierkegaard\": La vida solo puede ser entendida hacia atrás, pero debe ser vivida hacia adelante.",
            "\"Simone de Beauvoir\": No se nace mujer: se llega a serlo.",
            "\"Augusto Comte\": Saber para prever, prever para actuar.",
            "\"Rawls\": La justicia es la primera virtud de las instituciones sociales.",
            "\"Foucault\": Donde hay poder, hay resistencia.",
            "\"Freud\": La mente es como un iceberg; solo una pequeña parte está a la vista.",
            "\"Jung\": Quien mira afuera sueña; quien mira adentro despierta.",
            "\"Adorno\": La tarea del arte es llevar el caos al orden.",
            "\"Chomsky\": La libertad de expresión no tiene sentido si no incluye el derecho a decir lo que otros no quieren oír.",
            "\"Arendt\": El mayor enemigo del pensamiento es la pereza.",
            "\"Merleau-Ponty\": Ser humano es habitar el mundo.",
            "\"Epicuro\": La muerte no nos concierne, porque mientras existimos, ella no está, y cuando ella llega, nosotros ya no somos.",
            "\"Lucrecio\": Nada surge de la nada.",
            "\"Derrida\": No hay fuera del texto.",
            "\"Bourdieu\": La realidad social es una construcción social.",
            "\"Habermas\": El entendimiento mutuo es el propósito fundamental del lenguaje.",
            "\"Levinas\": El rostro del otro me interpela.",
            "\"Anaximandro\": Lo infinito es el origen de todas las cosas.",
            "\"Parménides\": El ser es, y el no ser no es.",
            "\"Protagoras\": El hombre es la medida de todas las cosas.",
            "\"Thoreau\": Fui a los bosques porque quería vivir deliberadamente.",
            "\"Emerson\": La confianza en uno mismo es el primer secreto del éxito.",
            "\"Bergson\": El tiempo es lo que impide que todo ocurra a la vez.",
            "\"Santayana\": Aquellos que no pueden recordar el pasado están condenados a repetirlo.",
            "\"Russell\": El problema con el mundo es que los estúpidos están seguros de todo y los inteligentes llenos de dudas.",
            "\"Whitehead\": La filosofía no es más que una serie de notas a pie de página a Platón.",
            "\"Dewey\": La educación no es preparación para la vida; la educación es la vida misma.",
            "\"Gramsci\": El viejo mundo se muere y el nuevo tarda en aparecer, y en ese claroscuro surgen los monstruos.",
            "\"Heidegger\": La angustia revela el ser de la nada.",
            "\"Nietzsche\": Dios ha muerto. ¡Y nosotros lo hemos matado!",
            "\"Marcuse\": La libertad es la posibilidad de elegir un mundo diferente.",
            "\"Buber\": Toda vida verdadera es encuentro.",
            "\"Aristóteles\": El arte imita a la naturaleza.",
            "\"Zubiri\": Lo real es lo que da de sí mismo.",
            "\"Rorty\": La verdad es aquello que funciona.",
            "\"Wittgenstein\": Los límites de mi lenguaje son los límites de mi mundo.",
            "\"Damasio\": El sentimiento de lo que ocurre es la base de nuestra conciencia.",
            "\"Hannah Arendt\": La acción humana necesita un espacio donde pueda aparecer.",
            "\"Byung-Chul Han\": Vivimos en una sociedad del cansancio."
        ];
        ;
        let indiceAleatorio = Math.floor(Math.random() * frases.length);
        return frases[indiceAleatorio];
    }

    function librosSeleccion() {
        let libros = [
            "\"Sapiens\": Una fascinante exploración de la historia humana, desde el origen hasta el futuro, ofreciendo profundas reflexiones sobre nuestra especie.",
            "\"Mil Cerebros\": Desentraña el funcionamiento del cerebro, proponiendo una teoría revolucionaria sobre cómo pensamos y percibimos el mundo.",
            "\"El Universo de la Nada\": Investiga cómo el universo surgió de la nada, desafiando nuestras creencias sobre la existencia y la realidad.",
            "\"Amplitud\": Examina cómo las organizaciones y las personas pueden prosperar en un mundo interconectado, enfatizando la importancia de la adaptabilidad.",
            "\"Meditaciones\": Reflexiones filosóficas del emperador Marco Aurelio, ofreciendo sabiduría atemporal sobre la vida, la virtud y la serenidad.",
            "\"Una Breve Historia de Casi Todo\": Un viaje a través del tiempo y el espacio, desentrañando los misterios del universo con humor y claridad.",
            "\"El Aleph\": Colección de cuentos de Borges, explorando infinitos, realidades paralelas y lo desconocido, con una prosa exquisita y profunda.",
            "\"El Hombre en Busca de Sentido\": Una profunda reflexión de Viktor Frankl sobre encontrar propósito incluso en las circunstancias más difíciles.",
            "\"Breve Historia del Tiempo\": Stephen Hawking nos guía por los misterios del cosmos, desde el Big Bang hasta los agujeros negros.",
            "\"Cosmos\": Carl Sagan explora las maravillas del universo y nuestra conexión con él, mezclando ciencia y poesía.",
            "\"La Estructura de las Revoluciones Científicas\": Thomas Kuhn redefine cómo entendemos el progreso científico a través de los paradigmas.",
            "\"El Gen Egoísta\": Richard Dawkins explica cómo los genes impulsan la evolución, con una mirada provocadora a nuestra biología.",
            "\"Pensar Rápido, Pensar Despacio\": Daniel Kahneman nos lleva al interior de la mente para explorar los procesos del pensamiento humano.",
            "\"Godel, Escher, Bach\": Un viaje intelectual a través de la lógica, el arte y la música, explorando la conciencia y la autorreferencia.",
            "\"Los Dragones del Edén\": Carl Sagan reflexiona sobre la evolución de la inteligencia humana y sus implicaciones para el futuro.",
            "\"La Conquista del Pan\": Peter Kropotkin presenta una visión anarquista de la cooperación y la justicia social.",
            "\"Walden\": Henry David Thoreau celebra la simplicidad, la naturaleza y la introspección en esta obra clásica.",
            "\"Las Intermitencias de la Muerte\": José Saramago plantea una meditación sobre la mortalidad y el significado de la vida.",
            "\"El Arte de Amar\": Erich Fromm explora el amor como una habilidad que puede cultivarse y no solo un sentimiento pasajero.",
            "\"El Príncipe\": Maquiavelo ofrece un análisis pragmático del poder y la política, relevante incluso siglos después.",
            "\"La República\": Platón imagina una sociedad ideal, planteando preguntas eternas sobre la justicia y la organización social.",
            "\"Sobre la Libertad\": John Stuart Mill defiende el valor de la libertad individual y sus límites en una sociedad democrática.",
            "\"El Capital\": Karl Marx examina las dinámicas del capitalismo y sus implicaciones sociales y económicas.",
            "\"Ética\": Spinoza ofrece un sistema filosófico que vincula la razón con la felicidad y la comprensión del universo.",
            "\"La Riqueza de las Naciones\": Adam Smith detalla los principios económicos que fundamentan el capitalismo moderno.",
            "\"Una Teoría de la Justicia\": John Rawls presenta una visión de justicia como equidad, fundamentada en la imparcialidad.",
            "\"El Ser y el Tiempo\": Heidegger examina la existencia humana y nuestra relación con el tiempo y el ser.",
            "\"El Mito de Sísifo\": Albert Camus explora el absurdo de la vida y cómo encontrar significado en un mundo sin sentido inherente.",
            "\"El Segundo Sexo\": Simone de Beauvoir analiza la opresión histórica de las mujeres y aboga por la igualdad de género.",
            "\"Historia de la Sexualidad\": Michel Foucault investiga cómo la sociedad ha regulado y conceptualizado la sexualidad a lo largo del tiempo.",
            "\"Civilización y Sus Descontentos\": Sigmund Freud explora las tensiones entre la civilización y las pulsiones humanas.",
            "\"El Código de la Vida\": Siddhartha Mukherjee narra la historia del ADN y su impacto en la medicina y la biología.",
            "\"La Gran Convergencia\": Richard Baldwin analiza cómo la globalización ha transformado la economía mundial.",
            "\"El Cisne Negro\": Nassim Nicholas Taleb examina eventos improbables que tienen un impacto masivo en la sociedad.",
            "\"Armas, Gérmenes y Acero\": Jared Diamond investiga las fuerzas que han moldeado la historia humana a través de la geografía y la biología.",
            "\"El Poder del Ahora\": Eckhart Tolle propone vivir en el presente como camino hacia la paz interior.",
            "\"Cómo Cambiar tu Mente\": Michael Pollan explora el potencial terapéutico de los psicodélicos y su impacto en la conciencia.",
            "\"Factfulness\": Hans Rosling desmonta mitos comunes sobre el mundo, mostrando datos optimistas sobre el progreso global.",
            "\"Antifrágil\": Nassim Nicholas Taleb explora cómo prosperar en un mundo lleno de incertidumbre.",
            "\"Homo Deus\": Yuval Noah Harari analiza el futuro de la humanidad en la era de la biotecnología y la inteligencia artificial.",
            "\"Los Cuatro Acuerdos\": Don Miguel Ruiz comparte principios toltecas para lograr libertad personal y paz interior.",
            "\"El Camino del Zen\": Alan Watts introduce los principios del budismo zen en la vida moderna.",
            "\"La Sombra del Viento\": Carlos Ruiz Zafón narra una historia de misterio y pasión literaria en la Barcelona del siglo XX.",
            "\"Cien Años de Soledad\": Gabriel García Márquez crea un universo mágico y realista en Macondo.",
            "\"1984\": George Orwell advierte sobre los peligros del totalitarismo y el control de la información.",
            "\"Un Mundo Feliz\": Aldous Huxley imagina un futuro distópico donde la tecnología y el conformismo rigen la vida.",
            "\"La Rebelión de Atlas\": Ayn Rand aboga por el individualismo y el capitalismo en esta obra filosófica y narrativa.",
            "\"El Manantial\": Una oda a la creatividad y la independencia del individuo, también de Ayn Rand.",
            "\"Kafka en la Orilla\": Haruki Murakami teje una historia surrealista llena de símbolos y reflexiones existenciales.",
            "\"El Guardián Entre el Centeno\": J.D. Salinger captura la alienación juvenil en la sociedad moderna.",
            "\"Crimen y Castigo\": Dostoyevski examina la moralidad, el arrepentimiento y la psicología del crimen.",
            "\"Los Hermanos Karamazov\": Una profunda exploración de la fe, la razón y las relaciones humanas.",
            "\"Matar a un Ruiseñor\": Harper Lee aborda el racismo y la justicia en el sur de Estados Unidos.",
            "\"Las Mil y Una Noches\": Una colección de cuentos clásicos que exploran temas universales y la magia de la narración.",
            "\"El Nombre de la Rosa\": Umberto Eco combina misterio, filosofía y religión en una abadía medieval.",
            "\"La Divina Comedia\": Dante Alighieri guía al lector a través del Infierno, el Purgatorio y el Paraíso.",
            "\"El Arte de la Guerra\": Sun Tzu ofrece estrategias atemporales aplicables más allá del campo de batalla.",
            "\"El Mundo de Sofía\": Jostein Gaarder introduce la filosofía a través de una cautivadora historia de aprendizaje.",
            "\"Rayuela\": Julio Cortázar propone una narrativa innovadora que desafía la lógica convencional.",
            "\"El Proceso\": Franz Kafka narra la absurda lucha de un hombre contra una burocracia implacable.",
            "\"Ensayo Sobre la Ceguera\": José Saramago reflexiona sobre la naturaleza humana en tiempos de crisis."
        ];
        
        let indiceAleatorio = Math.floor(Math.random() * libros.length);
        return libros[indiceAleatorio];
    }

    function chistesSeleccion() {
        let chistes = [
            "\"Chiste 1\": ¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
            "\"Chiste 2\": ¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.",
            "\"Chiste 3\": ¿Por qué los esqueletos no pelean entre ellos? Porque no tienen agallas.",
            "\"Chiste 4\": ¿Qué hace una abeja en el gimnasio? Zum-ba.",
            "\"Chiste 5\": ¿Cómo organizas una fiesta en el espacio? ¡Planeta!",
            "\"Chiste 6\": ¿Qué hace una vaca con los ojos cerrados? Leche concentrada.",
            "\"Chiste 7\": ¿Por qué las computadoras no pueden nadar? Porque tienen un ratón dentro.",
            "\"Chiste 8\": ¿Qué hace un perro con un taladro? Taladrando.",
            "\"Chiste 9\": ¿Cuál es el colmo de Aladdín? Tener mal genio.",
            "\"Chiste 10\": ¿Qué le dice una piedra a otra piedra? ¡Qué dura es la vida!",
            "\"Chiste 11\": ¿Por qué el libro de matemáticas está triste? Porque tiene demasiados problemas.",
            "\"Chiste 12\": ¿Cómo se despiden los químicos? Ácido un placer.",
            "\"Chiste 13\": ¿Por qué no confías en los átomos? ¡Porque lo forman todo!",
            "\"Chiste 14\": ¿Qué hace un pez mago? Nada por aquí, nada por allá.",
            "\"Chiste 15\": ¿Cómo se llama un oso sin dientes? ¡Un oso gomoso!",
            "\"Chiste 16\": ¿Qué le dice el café al azúcar? Sin ti, mi vida es amarga.",
            "\"Chiste 17\": ¿Qué hace una puerta cuando está aburrida? Se entretiene.",
            "\"Chiste 18\": ¿Por qué el tomate se sonrojó? ¡Porque vio el ketchup!",
            "\"Chiste 19\": ¿Qué le dijo un jardinero a otro? ¡Disfrutemos mientras podamos!",
            "\"Chiste 20\": ¿Qué es un pez en un cine? ¡Un mero espectador!",
            "\"Chiste 21\": ¿Qué hace un elefante en la piscina? ¡Nada, nada y nada!",
            "\"Chiste 22\": ¿Cómo llaman al campeón de buceo? El sumergible.",
            "\"Chiste 23\": ¿Qué hace un árbol en un ordenador? ¡Tener muchas ramas abiertas!",
            "\"Chiste 24\": ¿Qué le dijo una impresora a otra? ¿Esa hoja es tuya o es impresión mía?",
            "\"Chiste 25\": ¿Por qué la escoba está feliz? ¡Porque barre con todo!",
            "\"Chiste 26\": ¿Qué hace un ladrón de jabón? ¡Un limpio historial!",
            "\"Chiste 27\": ¿Qué le dice el techo al suelo? ¡Te piso con admiración!",
            "\"Chiste 28\": ¿Cómo saludan las bacterias? ¡Bac-teremos en contacto!",
            "\"Chiste 29\": ¿Qué es lo más curioso del pan? Que siempre anda en su miga.",
            "\"Chiste 30\": ¿Por qué los pescados son tan malos en matemáticas? ¡Porque se pierden en el agua!",
            "\"Chiste 31\": ¿Qué le dijo el semáforo al coche? No me mires, ¡me estoy cambiando!",
            "\"Chiste 32\": ¿Por qué el espagueti nunca tiene amigos? ¡Porque siempre anda enrollado!",
            "\"Chiste 33\": ¿Qué dijo un zapato cansado? Estoy hasta la suela.",
            "\"Chiste 34\": ¿Cómo se despide un pato? ¡Cuac-tchau!",
            "\"Chiste 35\": ¿Qué hace un cocodrilo detective? ¡Investiga todo a fondo!",
            "\"Chiste 36\": ¿Por qué las bicicletas no se caen solas? Porque están bien balanceadas.",
            "\"Chiste 37\": ¿Qué hace una cama en el gimnasio? ¡Ejercitar sus resortes!",
            "\"Chiste 38\": ¿Qué hace un café en la nevera? ¡Refrescar sus ideas!",
            "\"Chiste 39\": ¿Por qué el huevo fue al psicólogo? Porque tenía problemas de cascarón.",
            "\"Chiste 40\": ¿Qué dijo la servilleta al vaso? ¡Te cubro las espaldas!",
            "\"Chiste 41\": ¿Cómo se llama un dinosaurio dormido? ¡Un dino-siesta!",
            "\"Chiste 42\": ¿Qué le dijo el número 0 al 8? ¡Bonito cinturón!",
            "\"Chiste 43\": ¿Cómo se despiden las focas? ¡Se dan un abrazo aletas!",
            "\"Chiste 44\": ¿Qué hace un plátano en el hospital? ¡Se pela de miedo!",
            "\"Chiste 45\": ¿Por qué el cielo no hace dieta? Porque ya es ligero.",
            "\"Chiste 46\": ¿Qué le dice un semáforo a otro? ¡Deja de parpadear, me pones nervioso!",
            "\"Chiste 47\": ¿Cómo se llama el pez más famoso? ¡El pez-cado!",
            "\"Chiste 48\": ¿Por qué los melones nunca se casan? ¡Porque siempre cantaloupean!",
            "\"Chiste 49\": ¿Qué hace un pollo matemático? ¡Pone números!",
            "\"Chiste 50\": ¿Qué dice el mar al ver a un barco? ¡Nada, solo fluye!",
            "\"Chiste 51\": ¿Qué le dijo el café al pan? ¡Eres la miga de mi vida!",
            "\"Chiste 52\": ¿Por qué el cuaderno estaba cansado? ¡Porque tenía muchas hojas!",
            "\"Chiste 53\": ¿Qué hace un mosquito en un circo? ¡Acrobacias aéreas!",
            "\"Chiste 54\": ¿Cómo se despide un gato? ¡Miau-chau!",
            "\"Chiste 55\": ¿Qué hace un pájaro carpintero en el teclado? ¡Tecla-pica!",
            "\"Chiste 56\": ¿Qué dijo el tomate enamorado? ¡Eres el ketchup de mi vida!",
            "\"Chiste 57\": ¿Por qué la luna no va a las fiestas? Porque está llena.",
            "\"Chiste 58\": ¿Qué le dice una taza de café a otra? ¡Hagamos un espresso juntos!",
            "\"Chiste 59\": ¿Por qué los relojes no mienten? Porque siempre tienen la hora correcta.",
            "\"Chiste 60\": ¿Qué hace un zapato en un río? ¡Se moja hasta la suela!",
            "\"Chiste 61\": ¿Cómo se llama un pingüino rico? ¡Millon-ario!",
            "\"Chiste 62\": ¿Qué dice un fotón en un hotel? ¡No llevo equipaje, viajo ligero!",
            "\"Chiste 63\": ¿Por qué los pájaros no estudian? ¡Porque siempre vuelan!",
            "\"Chiste 64\": ¿Qué le dice un helado al sol? ¡No me derritas con tu mirada!",
            "\"Chiste 65\": ¿Qué hace un caracol con casco? ¡¡Conquistando el jardín!!",
            "\"Chiste 66\": ¿Cómo llama un elefante a otro? ¡Con elefante-cia!",
            "\"Chiste 67\": ¿Qué hace un koala con un lápiz? ¡Dibujar hojas!",
            "\"Chiste 68\": ¿Qué dijo el pez que estudiaba? ¡Sacaré buenas nada-ciones!",
            "\"Chiste 69\": ¿Qué le dijo un imán al metal? ¡Estoy atraído por ti!",
            "\"Chiste 70\": ¿Cómo se llama un pollo que sueña? ¡Un soñador frito!"
        ];
        
        let indiceAleatorio = Math.floor(Math.random() * chistes.length);
        return chistes[indiceAleatorio];
    }

    function discosSeleccion() {
        let reseñasDeDiscos = [
            "\"Kind of Blue\": Una obra maestra del jazz de Miles Davis, explorando la improvisación modal con un sonido único y evocador.",
            "\"A Love Supreme\": John Coltrane fusiona espiritualidad y música, creando un álbum trascendental y profundamente emotivo, lleno de intensidad y devoción.",
            "\"Djesse 3\": Jacob Collier despliega su genio musical en un álbum ecléctico, fusionando géneros con maestría y creatividad desbordante.",
            "\"We Live Here\": Pat Metheny Group ofrece una mezcla única de jazz, funk y world music, creando paisajes sonoros envolventes y sofisticados.",
            "\"Dark Side of the Moon\": Pink Floyd crea una obra atemporal, explorando temas profundos con innovaciones sonoras y producción impecable.",
            "\"Abbey Road\": The Beatles se despiden con un álbum icónico, lleno de armonías perfectas, melodías inolvidables y experimentación sonora.",
            "\"Innuendo\": Queen muestra su diversidad musical en un álbum poderoso y emotivo, lleno de mensajes profundos y momentos épicos.",
            "\"Off the Wall\": Michael Jackson fusiona disco, pop y funk en un álbum vibrante, estableciendo su legado como el Rey del Pop.",
            "\"El Amor Después del Amor\": Fito Páez ofrece una oda al amor y la vida en un álbum cargado de pasión, melancolía y genialidad lírica.",
            "\"Thriller\": Michael Jackson redefine el pop con un álbum cargado de hits, producción magistral y colaboraciones legendarias.",
            "\"OK Computer\": Radiohead reinventa el rock alternativo con un álbum introspectivo y visionario, lleno de experimentación sonora.",
            "\"Born to Run\": Bruce Springsteen captura la esencia del sueño americano con letras poéticas y un sonido poderoso y nostálgico.",
            "\"Rumours\": Fleetwood Mac ofrece un álbum de rock suave con armonías impecables, letras desgarradoras y melodías inolvidables.",
            "\"Hotel California\": Eagles presenta una obra maestra del rock clásico, explorando la decadencia y el anhelo con un sonido icónico.",
            "\"The Wall\": Pink Floyd crea un concepto épico, explorando la alienación y la psique humana con narrativas líricas y sonido teatral.",
            "\"Bitches Brew\": Miles Davis revoluciona el jazz con un álbum experimental, fusionando rock, funk y psicodelia en un sonido único.",
            "\"Tapestry\": Carole King comparte una obra introspectiva y cálida, con letras sinceras y melodías conmovedoras que trascienden el tiempo.",
            "\"Back to Black\": Amy Winehouse fusiona soul y jazz en un álbum íntimo, cargado de emociones crudas y una voz inigualable.",
            "\"Nevermind\": Nirvana define una generación con un álbum lleno de energía grunge, letras introspectivas y melodías inolvidables.",
            "\"Exodus\": Bob Marley eleva el reggae a un nivel global, con canciones de resistencia, esperanza y amor eterno.",
            "\"Songs in the Key of Life\": Stevie Wonder crea un álbum expansivo y diverso, celebrando la vida con letras significativas y arreglos complejos.",
            "\"Goodbye Yellow Brick Road\": Elton John muestra su versatilidad y maestría musical en un álbum épico, lleno de himnos icónicos.",
            "\"Led Zeppelin IV\": Una obra esencial del rock, combinando elementos de folk, blues y hard rock con una maestría indiscutible.",
            "\"Blue\": Joni Mitchell entrega un álbum profundamente personal, lleno de poesía y una belleza melancólica que resuena profundamente.",
            "\"Graceland\": Paul Simon fusiona la música africana y pop en un álbum innovador, celebrando la diversidad cultural con sensibilidad artística.",
            "\"What's Going On\": Marvin Gaye aborda temas sociales y políticos en un álbum de soul profundamente conmovedor y visionario.",
            "\"Appetite for Destruction\": Guns N' Roses reinventa el hard rock con un álbum cargado de energía, actitud y guitarras legendarias.",
            "\"Paranoid\": Black Sabbath sienta las bases del heavy metal con un sonido oscuro y contundente que marcó a generaciones.",
            "\"Pet Sounds\": The Beach Boys redefinen el pop con arreglos complejos y letras introspectivas en una obra maestra atemporal.",
            "\"Hounds of Love\": Kate Bush fusiona experimentalismo y narrativa en un álbum audaz y emocionalmente resonante.",
            "\"Automatic for the People\": R.E.M. ofrece un álbum melancólico y maduro, explorando la mortalidad y la esperanza con un sonido etéreo.",
            "\"Lemonade\": Beyoncé crea una narrativa poderosa de amor, traición y empoderamiento, combinando géneros y sonidos innovadores.",
            "\"Ten\": Pearl Jam define el grunge con un álbum cargado de intensidad emocional y guitarras inolvidables.",
            "\"Illinois\": Sufjan Stevens combina folk y orquestación en un álbum conceptual lleno de historias y paisajes sonoros únicos.",
            "\"My Beautiful Dark Twisted Fantasy\": Kanye West fusiona hip-hop y arte visual en un álbum ambicioso y audazmente creativo.",
            "\"Yankee Hotel Foxtrot\": Wilco combina rock alternativo y experimentalismo, creando un álbum que desafía convenciones y emociona profundamente.",
            "\"Harvest\": Neil Young entrega un álbum cálido y conmovedor, explorando el amor y la pérdida con una sensibilidad única.",
            "\"Aja\": Steely Dan ofrece un álbum de jazz-rock impecablemente producido, lleno de sofisticación y virtuosismo.",
            "\"Disintegration\": The Cure presenta un álbum oscuro y melancólico, lleno de atmósferas envolventes y letras introspectivas.",
            "\"Sticky Fingers\": The Rolling Stones muestran su versatilidad y maestría en un álbum de rock cargado de emoción y crudeza.",
            "\"Revolver\": The Beatles reinventan la música pop con un álbum innovador, lleno de experimentación y diversidad sonora.",
            "\"The Miseducation of Lauryn Hill\": Lauryn Hill fusiona hip-hop, soul y reggae en un álbum íntimo y poderoso que definió una era.",
            "\"Forever Changes\": Love crea una obra maestra de psicodelia y folk-rock, con letras enigmáticas y arreglos innovadores.",
            "\"Grace\": Jeff Buckley ofrece un álbum de belleza conmovedora, lleno de pasión y una voz inolvidable.",
            "\"Blonde on Blonde\": Bob Dylan combina poesía y música en un álbum revolucionario, lleno de lirismo y profundidad.",
            "\"Is This It\": The Strokes revitalizan el rock alternativo con un álbum lleno de energía y melodías pegajosas.",
            "\"Loveless\": My Bloody Valentine redefine el shoegaze con un álbum envolvente, lleno de texturas sónicas y emoción.",
            "\"Elephant\": The White Stripes combinan blues y garage rock en un álbum crudo y electrizante.",
            "\"Kindred Spirits\": Lizz Wright captura la esencia del soul y jazz con una voz profunda y emocional.",
            "\"Homogenic\": Björk ofrece un álbum innovador, fusionando electrónica y emotividad en un viaje sonoro inolvidable.",
            "\"A Rush of Blood to the Head\": Coldplay combina emotividad y melodías épicas en un álbum que define su sonido único.",
            "\"The Bends\": Radiohead mezcla rock alternativo y emotividad en un álbum lleno de momentos memorables.",
            "\"After the Gold Rush\": Neil Young crea un álbum introspectivo y poético, con un sonido folk-rock atemporal.",
            "\"Purple Rain\": Prince fusiona pop, rock y funk en un álbum icónico que redefine la música de su tiempo.",
            "\"Time Out\": Dave Brubeck explora ritmos inusuales en un álbum de jazz revolucionario y accesible.",
            "\"Rum Sodomy & the Lash\": The Pogues combinan folk celta y punk en un álbum lleno de energía y emoción.",
            "\"Blood on the Tracks\": Bob Dylan ofrece un álbum introspectivo y poético sobre el amor y la pérdida.",
            "\"In Rainbows\": Radiohead redefine la música digital con un álbum experimental y emocionalmente resonante.",
            "\"Déjà Vu\": Crosby, Stills, Nash & Young combinan armonías perfectas y letras introspectivas en un álbum clásico."
        ];
        
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