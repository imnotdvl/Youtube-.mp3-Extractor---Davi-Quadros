Youtube Extractor - Davi Quadros

Este projeto permite extrair áudio em formato .mp3 diretamente de vídeos do YouTube de forma simples e transparente, utilizando Node.js no backend e yt-dlp.

💡 Como rodar na sua casa
Siga os passos abaixo para configurar o ambiente e rodar o extrator localmente.

1. Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:

Node.js: O ambiente de execução para o servidor.

yt-dlp: A ferramenta de linha de comando que faz a "mágica" do download.

FFmpeg: Essencial para que o sistema consiga converter o vídeo para áudio MP3.

2. Instalação
Baixe os arquivos deste repositório ou faça o clone via Git. Em seguida, abra o terminal na pasta do projeto e execute:

Bash
npm install
Este comando vai baixar todas as dependências necessárias (Express, Cors, etc.) listadas no package.json.

3. Execução
Para iniciar o servidor, basta rodar:

Bash
node server.js
O servidor estará ativo em: http://localhost:3001

4. Como usar
Abra o seu navegador e acesse http://localhost:3001 (ou abra o arquivo index.html).

Cole a URL de um vídeo do YouTube no campo indicado.

Clique em "Extract Links".

Aguarde o processamento (o status aparecerá na tela).

Quando o link aparecer, clique em "Baixar MP3" para salvar o arquivo.

🛠️ Tecnologias Utilizadas
Backend: Node.js com Express

Frontend: HTML5, CSS3 e JavaScript (Vanilla)

Ferramentas de Sistema: yt-dlp e FFmpeg

🛡️ Segurança e Transparência
Diferente de muitos sites de conversão online, este projeto é open-source. Isso significa que:

Transparência: Você pode ler cada linha do código para entender como ele funciona.

Segurança: Você não precisa baixar executáveis .exe suspeitos; você roda o código fonte diretamente no seu ambiente controlado.

Privacidade: O processamento ocorre na sua máquina, sem anúncios ou rastreadores externos.

Notas de desenvolvedor
O projeto está configurado para rodar na porta 3001. Certifique-se de que ela não está sendo usada por outro serviço.

Os arquivos baixados são armazenados temporariamente na pasta /downloads do projeto.
