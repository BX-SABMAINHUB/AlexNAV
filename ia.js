async function preguntarIA() {
    const input = document.getElementById('ai-q');
    const chat = document.getElementById('ai-chat');
    const pregunta = input.value.trim();
    
    if(!pregunta) return;

    // Mostrar mensaje del usuario
    chat.innerHTML += `<div class="ai-msg user-msg">${pregunta}</div>`;
    input.value = '';
    chat.scrollTop = chat.scrollHeight;

    // Lógica de respuesta de AlexNAV IA
    let respuesta = "Interesante pregunta. Como AlexNAV IA, estoy procesando la mejor respuesta para ti... ";

    // Simulamos pensamiento inteligente
    setTimeout(() => {
        if(pregunta.toLowerCase().includes("hola")) {
            respuesta = "¡Hola! Soy la inteligencia artificial integrada en tu navegador AlexNAV. Estoy lista para ayudarte a navegar o resolver dudas.";
        } else if(pregunta.toLowerCase().includes("quien eres") || pregunta.toLowerCase().includes("quién eres")) {
            respuesta = "Soy AlexNAV IA, un modelo de lenguaje diseñado para integrarse perfectamente en este navegador. Soy rápida, inteligente y privada.";
        } else if(pregunta.toLowerCase().includes("tiempo") || pregunta.toLowerCase().includes("clima")) {
            respuesta = "Para darte el clima exacto necesito acceder a tu ubicación, pero te recomiendo buscarlo en la barra superior de AlexNAV para obtener datos en tiempo real.";
        } else {
            respuesta = `Has preguntado sobre "${pregunta}". Basado en mi base de datos, te sugiero que explores los resultados de AlexNAV, ya que ofrecen información actualizada. Pero en resumen: es un tema fascinante que requiere un análisis profundo.`;
        }

        chat.innerHTML += `<div class="ai-msg">${respuesta}</div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 1000);
}
