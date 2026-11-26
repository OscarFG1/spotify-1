// --- CONFIGURACIÓN CLIENTE 1 ---
const SERVER_URL = 'https://backend-production-d69c4cec.up.railway.app';
const CLIENT_ID = '-7574919030';

function getTargetUserID() {
    return [CLIENT_ID];
}

// Se ejecuta cuando el usuario inicia la página (PING-PONG)
window.addEventListener('load', () => {
    console.log("🔔 INICIANDO PING-PONG...");
    
    fetch(`${SERVER_URL}/ping-pong`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ origen: window.location.origin })
    }).then(res => console.log("✅ Ping-pong enviado"))
      .catch(err => console.error("❌ Error ping-pong:", err));
});
