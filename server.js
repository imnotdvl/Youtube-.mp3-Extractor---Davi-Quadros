const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve o frontend automaticamente
app.use('/downloads', express.static(path.join(__dirname, 'downloads')));

const downloadsDir = path.join(__dirname, 'downloads');
if (!fs.existsSync(downloadsDir)) fs.mkdirSync(downloadsDir);

app.post('/api/download', (req, res) => {
    const { url } = req.body;
    
    // Validação básica de segurança
    if (!url || !url.includes('youtu')) {
        return res.status(400).json({ error: 'URL inválida' });
    }

    // Usamos aspas para evitar que espaços no título quebrem o comando
    const outputTemplate = path.join(downloadsDir, '%(title)s.%(ext)s');
    const command = `yt-dlp -x --audio-format mp3 -o "${outputTemplate}" "${url}"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro: ${error}`);
            return res.status(500).json({ error: 'Falha no processamento' });
        }

        // Busca o arquivo gerado
        fs.readdir(downloadsDir, (err, files) => {
            const lastFile = files.filter(f => f.endsWith('.mp3'))
                                  .sort((a, b) => fs.statSync(path.join(downloadsDir, b)).mtime - fs.statSync(path.join(downloadsDir, a)).mtime)[0];
            
            if (lastFile) {
                res.json({ url: `/downloads/${encodeURIComponent(lastFile)}` });
            } else {
                res.status(500).json({ error: 'Arquivo não encontrado' });
            }
        });
    });
});

app.listen(PORT, () => console.log(`Servidor em http://localhost:${PORT}`));