<div align="center">

# 🌿 Aurea — Estética Médica

**Landing page responsiva para uma clínica de estética médica (conceito)**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsivo](https://img.shields.io/badge/layout-responsivo-936D5E?style=flat)
![Sem dependências](https://img.shields.io/badge/depend%C3%AAncias-nenhuma-936D5E?style=flat)

[Ver demonstração](#) · [Reportar problema](../../issues)

<!-- Troque pelo print da página, por exemplo: ![Preview](docs/preview.png) -->

</div>

---

## Sobre o projeto

Projeto de conversão de um design do **Figma** para código: uma landing page em HTML, CSS e JavaScript puros, sem frameworks e sem etapa de build.

O foco é fidelidade ao design (cores, tipografia, medidas e espaçamentos extraídos do arquivo original), código limpo e legível, e uma experiência suave em qualquer tamanho de tela.

> ⚠️ **Projeto conceito.** A clínica, os depoimentos, as avaliações e os dados de contato são fictícios e servem apenas para demonstração. As imagens são ilustrativas.

## Funcionalidades

- Layout fiel ao design de 1920 px, adaptado para tablet e celular
- Menu mobile com abertura animada
- Animação de entrada no hero e aparecimento suave das seções ao rolar
- Cards de tratamento com zoom na imagem e elevação no hover
- Carrossel de depoimentos com setas, rolagem por toque e barra de progresso
- FAQ em acordeão, com uma pergunta aberta por vez
- Acessibilidade: foco visível no teclado, `aria-expanded` no menu e no FAQ, textos alternativos nas imagens
- Respeita `prefers-reduced-motion` (animações desligadas para quem prefere)
- Imagens em WebP, leves e rápidas de carregar

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica |
| CSS3 | Variáveis, Grid, Flexbox, `clamp()`, animações |
| JavaScript (ES6) | Menu, FAQ, carrossel e animações ao rolar |
| Google Fonts | Cormorant Garamond e Inter |

## Estrutura de pastas

```
clinica_estetica/
├── index.html          # Estrutura da página
├── style.css           # Estilos (organizados por seção)
├── script.js           # Interações
├── README.md
└── images/
    ├── hero.webp
    ├── botox.webp
    ├── preenchimento.webp
    └── laser.webp
```

## Como executar

Não precisa instalar nada.

```bash
# 1. Clone o repositório
git clone https://github.com/Franciney-Andrews/clinica_estetica.git

# 2. Entre na pasta
cd clinica_estetica

# 3. Abra o index.html no navegador
```

Se preferir um servidor local:

```bash
npx serve .
```

## Design

### Paleta de cores

| Cor | HEX | Uso |
|---|---|---|
| Terracota | `#936D5E` | Botões, links e destaques |
| Grafite | `#302E2B` | Títulos |
| Cinza quente | `#6D6861` | Parágrafos |
| Creme | `#F9F6F0` | Fundo base |
| Creme escuro | `#F0E9DF` | Faixas alternadas |
| Branco quente | `#FFFDF9` | Cards |
| Bege rosado | `#EEE0D9` | Faixa de CTA |
| Bege neutro | `#DBD2C7` | Botões do carrossel |

### Tipografia

- **Títulos:** Cormorant Garamond (serifa)
- **Textos e interface:** Inter (sans-serif)

### Grid

- Frame de referência: **1920 px**
- Margens laterais de **144 px** e conteúdo de **1632 px**
- Cards em 3 colunas de **528 px** com espaçamento de **24 px**

### Breakpoints

| Largura | Mudança |
|---|---|
| ≤ 1000 px | Cards em 2 colunas, hero em coluna única |
| ≤ 860 px | Menu hambúrguer |
| ≤ 640 px | Tudo em coluna única |

## Como personalizar

**Cores e fontes:** altere as variáveis no início do `style.css`:

```css
:root {
  --primary: #936d5e;
  --bg: #f9f6f0;
  --serif: "Cormorant Garamond", Georgia, serif;
}
```

**WhatsApp e redes sociais:** no `index.html`, procure por `wa.me/5500000000000` e pelos links `href="#"` do rodapé.

**Imagens:** substitua os arquivos da pasta `images/` mantendo os mesmos nomes. Para telas retina, use imagens com o dobro da largura exibida.

## Próximos passos

- [ ] Formulário de contato com validação
- [ ] Versão com tema escuro
- [ ] Páginas internas de cada tratamento
- [ ] Meta tags Open Graph para compartilhamento

## Autor

**Andrews** — Desenvolvedor web e designer gráfico, de Teresina, PI 🇧🇷

Trabalho com HTML, CSS, JavaScript, React, Node.js, Python, PostgreSQL, Flutter e Swift, e crio interfaces no Figma e no Photoshop.

- GitHub: [@SEU-USUARIO](https://github.com/Franciney-Andrews)
- Behance: [seu perfil](https://www.behance.net/francineyandrews)

## Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais informações.

As imagens e os textos são ilustrativos e não podem ser usados como material real de uma clínica.

---

<div align="center">

Feito com cuidado por **Franciney Andrews** 🌿

</div>
