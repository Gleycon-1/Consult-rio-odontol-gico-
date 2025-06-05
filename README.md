# Website Template (HTML, CSS, JavaScript)

Este é um template de website responsivo, construído do zero com HTML, CSS e JavaScript puro, replicando o design dos prints de tela cheia fornecidos. A principal modificação nesta versão é a **transformação da seção Hero para um layout de duas colunas**, similar à seção "Sobre Mim".

## Estrutura de Arquivos

-   `index.html`: O arquivo principal HTML que define a estrutura do website e seu conteúdo, incluindo o novo layout de duas colunas para a seção Hero.
-   `style.css`: Contém todos os estilos CSS para o layout, tipografia, cores, responsividade e animações, com ajustes específicos para o novo Hero.
-   `script.js`: Inclui o JavaScript para o menu hambúrguer responsivo e a animação de revelação das seções ao scroll. A lógica de troca de imagem de fundo do Hero foi removida/adaptada, pois o Hero agora usa uma `<img>` tag.
-   `images/` (Pasta): **Crucial!** Aqui você deve colocar **TODAS** as imagens que você forneceu. Os caminhos no HTML e CSS já estão definidos para procurar as imagens dentro desta pasta (ex: `images/NomeDaSuaImagem.jpg`).

## Como Usar

1.  **Crie os arquivos:** Crie os três arquivos: `index.html`, `style.css` e `script.js` e copie o conteúdo acima para seus respectivos arquivos.
2.  **Crie a pasta `images`:** No mesmo diretório onde você salvou `index.html`, `style.css` e `script.js`, crie uma pasta chamada `images`.
3.  **Organize as Imagens:** Coloque todas as imagens do seu projeto (as que você me enviou, como `Hero-desktop-2 (1).jpg` para o hero, `Hero-Mobile (1).webp` se for usar em outras seções, `Logo-Centro-Medico-Minimalista-Azul.png`, `Quem-e (1).webp`, e as imagens para as especialidades e depoimentos, se houver) dentro da pasta `images/`. **NÃO É NECESSÁRIO ALTERAR OS CAMINHOS NO CÓDIGO**, pois eles já foram ajustados para `images/`.
    * **Observação sobre as imagens de perfil:** Para a seção "Sobre Mim" e talvez para outras seções de perfil, o código usa a imagem `Quem-e (1).webp`. Se você tiver outras imagens de perfil de doutores para incluir, você pode duplicar a estrutura HTML para cada doutor na seção "Sobre Mim" ou criar uma nova seção "Nossa Equipe" e usar suas respectivas imagens.
4.  **Abra no Navegador:** Basta abrir o arquivo `index.html` em qualquer navegador web para visualizar o site.

## Recursos Implementados

-   **Design Responsivo:** O site se adapta bem a diferentes tamanhos de tela (desktop, tablet, mobile), seguindo os layouts dos prints de tela cheia.
-   **Navegação Fixa:** O cabeçalho permanece fixo no topo da tela ao rolar.
-   **Menu Hambúrguer:** Um menu responsivo para dispositivos móveis.
-   **Animação ao Scroll:** As seções "nascem" suavemente na tela quando o usuário rola para elas, usando `Intersection Observer`.
-   **Seção Hero de Duas Colunas:** O layout da seção inicial agora apresenta uma imagem e conteúdo lado a lado, com responsividade adaptada.
-   **Estrutura de Conteúdo Detalhada:** Inclui seções para "Sobre Mim" (com foto), "Currículo", "Especialidades", "Depoimentos" e "Contato" (com formulário, informações de contato e mapa).
-   **Ícones:** Integrado com Font Awesome para ícones de contato e redes sociais (necessário conexão com a internet para carregar).

## Personalização

Você pode facilmente personalizar este template:

-   **Textos:** Edite diretamente os textos `(Título da Seção:...)`, `(Lorem ipsum...)` no `index.html`.
-   **Imagens:** Substitua os arquivos de imagem na pasta `images/` pelos seus próprios, mantendo os nomes dos arquivos ou atualizando os caminhos no HTML e CSS se você mudar os nomes dos arquivos.
-   **Cores e Fontes:** Altere as variáveis CSS no início de `style.css` (`:root {}`) para mudar as cores globais e as famílias de fontes.
-   **Seções:** Adicione, remova ou reorganize as seções no `index.html`. Siga o padrão das classes `section` e `reveal-section` para manter as animações.
-   **Animações:** Ajuste os parâmetros de `transition` ou `threshold` no `script.js` e `style.css` para modificar o comportamento das animações.
-   **Formulário de Contato:** O formulário de contato é apenas HTML. Para que ele funcione e envie mensagens, você precisará integrá-lo a um serviço de backend (como um script PHP, um serviço de formulário como Formspree, Netlify Forms, etc.).
-   **Mapa:** Substitua o `src` do `iframe` do mapa no `index.html` pelo código de incorporação do Google Maps do seu endereço real.

Sinta-se à vontade para explorar o código e fazer as modificações necessárias para os seus projetos! Espero que este seja o resultado que você esperava.
