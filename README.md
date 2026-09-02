# Caderneta+

App de acompanhamento da saúde da criança — vacinas, consultas e aquele “caderninho” que a gente sempre esquece em casa. A ideia é ter a caderneta no celular, com um visual calmo (verde-água, branco) e um fluxo simples de usar.

Ainda está no começo. Hoje o que existe de verdade é a **tela de Início** (logo, ilustração, a frase *Cuidado e proteção em cada fase.*, botão **Começar** e o link **Já tenho uma conta**). Cadastro, login e o restante das telas ainda vão entrar.

Se você está estudando o código junto comigo, tem um passo a passo bem miudinho da primeira tela em [`docs/explicacao-tela-inicio.md`](docs/explicacao-tela-inicio.md).

---

## O que o app pretende ser

- Guardar o perfil da criança (nome, data de nascimento, etc.)
- Acompanhar vacinas e próximas doses
- Ter um “home” com o que importa no dia a dia

Por enquanto, **Começar** e **Já tenho uma conta** só abrem um aviso. Não tem tela seguinte ainda — e tudo bem, uma coisa de cada vez.

---

## Como rodar

Precisa de [Node.js](https://nodejs.org/) e, no celular, o app [Expo Go](https://expo.dev/go) ajuda bastante.

```bash
npm install
npx expo start
```

No terminal aparece um QR code. Aí você escolhe:

| Tecla | O que faz |
| --- | --- |
| `a` | Abre no emulador Android |
| `i` | Abre no simulador iOS (Mac) |
| `w` | Abre no navegador |
| Expo Go | Lê o QR code no celular |

No **web**, o layout fica num quadro no tamanho de celular (mais ou menos 390×844), para não esticar numa janela enorme. No aparelho de verdade, ocupa a tela toda.

Se algo quebrar no `npm install`, fecha o terminal, abre de novo na pasta do projeto e tenta outra vez. Acontece.

---

## Onde mexer

O Expo Router olha a pasta `src/app`. O arquivo `index.jsx` é a primeira tela que abre.

```
src/app/_layout.jsx     → casca do app (navegação, quadro no web)
src/app/index.jsx       → tela Início
assets/images/          → ilustração e ícones
docs/                   → explicação da tela, se quiser estudar
```

A tela está em **JavaScript** (`.jsx`), de propósito: mais fácil de ler no começo. Tem TypeScript solto em arquivos antigos do template; pode ignorar por enquanto.

---

## Licença

Este projeto não possui licença de código aberto.

Todos os direitos são reservados à autora. Não é permitida a cópia,
modificação, distribuição ou utilização deste código sem autorização prévia.
