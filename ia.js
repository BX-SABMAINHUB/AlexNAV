// ia.js - El Motor de Inteligencia Real de AlexNAV
async function preguntarIA() {
    const input = document.getElementById('ai-q');
    const chat = document.getElementById('ai-chat');
    const pregunta = input.value.trim();
    
    if(!pregunta) return;

    // 1. Mostrar tu pregunta
    chat.innerHTML += `<div class="ai-msg user-msg">${pregunta}</div>`;
    input.value = '';
    chat.scrollTop = chat.scrollHeight;

    // 2. Crear burbuja de "pensando"
    const id = "ia-" + Date.now();
    chat.innerHTML += `<div class="ai-msg" id="${id}">...</div>`;
    chat.scrollTop = chat.scrollHeight;

    try {
        // Conexión con un motor de lenguaje potente (Pollinations AI)
        // Este motor responde CUALQUIER COSA de forma inteligente
        const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(pregunta)}?system=Eres AlexNAV IA, la inteligencia más potente integrada en el navegador de Alex. Respondes de forma experta, larga y detallada a cualquier pregunta.`);
        
        const texto = await response.text();

        // 3. Escribir la respuesta real
        document.getElementById(id).innerHTML = `<b>AlexNAV IA:</b><br>${texto.replace(/\n/g, '<br>')}`;
        
    } catch (error) {
        document.getElementById(id).innerText = "No he podido conectar con mi cerebro central. Revisa tu conexión.";
    }
    chat.scrollTop = chat.scrollHeight;
}
