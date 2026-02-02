import 'dotenv/config';

const FB_API_VERSION = 'v19.0';
const BASE_URL = `https://graph.facebook.com/${FB_API_VERSION}`;

async function checkStep(name: string, fn: () => Promise<boolean>) {
    process.stdout.write(`Prueba: ${name}... `);
    try {
        const success = await fn();
        if (success) {
            console.log('✅ OK');
        } else {
            console.log('wc FALLÓ');
        }
    } catch (e: any) {
        console.log('❌ ERROR');
        console.error('   ' + e.message);
    }
}

async function main() {
    console.log('\n--- Diagnóstico de Credenciales Meta (Facebook/Instagram) ---\n');

    const appId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
    const pageId = process.env.FACEBOOK_PAGE_ID;
    const token = process.env.FACEBOOK_ACCESS_TOKEN;
    const igId = process.env.INSTAGRAM_ACCOUNT_ID;

    // 1. Verificar existencia de variables
    if (!appId) console.warn('⚠️  Falta NEXT_PUBLIC_FACEBOOK_APP_ID (No crítico para backend, pero sí para frontend)');
    
    if (!token) {
        console.error('❌ Falta FACEBOOK_ACCESS_TOKEN en .env');
        console.log('   Sin esto, el servidor no puede leer métricas.');
        return;
    }

    // 2. Verificar Validez del Token
    await checkStep('Verificando validez del Token', async () => {
        const res = await fetch(`${BASE_URL}/me?access_token=${token}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        console.log(`\n   -> Token válido para usuario: ${data.name} (ID: ${data.id})`);
        return true;
    });

    // 3. Verificar Acceso a Página
    if (!pageId) {
        console.warn('⚠️  Falta FACEBOOK_PAGE_ID en .env. Saltando prueba de página.');
    } else {
        await checkStep(`Verificando acceso a Página (${pageId})`, async () => {
            const res = await fetch(`${BASE_URL}/${pageId}?fields=name,fan_count&access_token=${token}`);
            const data = await res.json();
            if (data.error) throw new Error(data.error.message);
            console.log(`\n   -> Página encontrada: "${data.name}" con ${data.fan_count} fans.`);
            return true;
        });
    }

    // 4. Verificar Acceso a Instagram
    if (!igId) {
        console.warn('⚠️  Falta INSTAGRAM_ACCOUNT_ID en .env. Saltando prueba de Instagram.');
    } else {
        await checkStep(`Verificando cuenta Instagram (${igId})`, async () => {
            const res = await fetch(`${BASE_URL}/${igId}?fields=username,followers_count&access_token=${token}`);
            const data = await res.json();
            if (data.error) throw new Error(data.error.message);
            console.log(`\n   -> Instagram: "@${data.username}" con ${data.followers_count} seguidores.`);
            return true;
        });
    }
}

main();
