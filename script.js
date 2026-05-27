document.getElementById('extract-btn').addEventListener('click', async () => {
    const url = document.getElementById('url-input').value.trim();
    const resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = '';

    if (!url) {
        resultDiv.textContent = 'Por favor, insira uma URL do YouTube.';
        resultDiv.style.color = '#ff4d4d'; // cor vermelha para erro
        return;
    }

    resultDiv.textContent = 'Processando... Aguarde.';
    resultDiv.style.color = '#ffffff';

    try {
        const response = await fetch('http://localhost:3001/api/download', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });

        const data = await response.json();

        if (response.ok && data.url) {
            const fullDownloadUrl = `http://localhost:3001${data.url}`;
            
            resultDiv.innerHTML = `
                <p style="margin-bottom: 10px; color: #44ff44;">Áudio extraído com sucesso!</p>
                <a href="${fullDownloadUrl}" class="download-btn" download>Clique para Baixar MP3</a>
            `;
        } else {
            resultDiv.textContent = data.error || 'Erro ao extrair o link.';
            resultDiv.style.color = '#ff4d4d';
        }
    } catch (err) {
        resultDiv.textContent = 'Erro de conexão com o servidor. Certifique-se que o backend está rodando.';
        resultDiv.style.color = '#ff4d4d';
    }
});