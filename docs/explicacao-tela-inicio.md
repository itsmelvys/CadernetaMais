# Tela Início (Caderneta+) — o que foi feito e por quê

Este texto explica a **primeira tela** do app, em linguagem de iniciante. Você pode abrir os arquivos ao lado e ir comparando.

Arquivos desta tela:

- `src/app/_layout.jsx` — “casca” do app (navegação)
- `src/app/index.jsx` — a tela Início em si
- `assets/images/inicio-ilustracao.png` — desenho da mãe e do bebê

---

## 1. Expo Router: por que `index.jsx` é a primeira tela?

Este projeto usa **Expo Router**. Ele escolhe as telas pelos **nomes dos arquivos** dentro da pasta `src/app`.

| Arquivo | Significado |
| --- | --- |
| `_layout.jsx` | Layout raiz: envolve todas as telas |
| `index.jsx` | Rota inicial (`/`). É a primeira tela que abre |

Se o arquivo se chamasse `login.jsx`, a rota seria `/login`. O nome `index` é especial: significa “página inicial”.

Usamos **JavaScript** (`.jsx`), não TypeScript (`.tsx`). O conteúdo é quase o mesmo; a diferença é que não precisamos declarar tipos.

---

## 2. O arquivo `_layout.jsx`

Este arquivo tem duas caixas:

1. **`fundo`** — ocupa a janela inteira (no computador fica verde-claro).
2. **`celular`** — no **web**, tem tamanho de um celular (largura máxima 390 e altura máxima 844). Assim a tela Início não se estica num monitor alto. No celular de verdade, essa caixa ocupa a tela toda.

`Platform.OS === 'web'` pergunta: “estamos no navegador?”. Se sim, usamos o quadro de celular. Se não, usamos `flex: 1` (tela cheia).

### `import`

- `Stack` vem do Expo Router. É uma pilha de telas: a de cima é a que você vê. Depois, quando existirem login e cadastro, elas podem “entrar” por cima desta.
- `StatusBar` controla os ícones da hora, bateria e sinal no topo do celular.
- `Platform`, `View` e `StyleSheet` vêm do React Native, para desenhar o quadro e saber se é web.

### `export default function RootLayout()`

Toda tela (e o layout) precisa **exportar um componente** como padrão. O Expo Router chama essa função para desenhar a interface.

### `<StatusBar style="dark" />`

`style="dark"` deixa os ícones **escuros**, porque o fundo da tela é branco. Se fosse `light`, os ícones ficariam brancos (melhor em fundo escuro).

### `<Stack screenOptions={{ headerShown: false }} />`

- `Stack` liga a navegação em pilha.
- `headerShown: false` **esconde a barra de título** (aquela faixa cinza com o nome da tela). No mockup a tela é limpa, sem esse cabeçalho.
- Também **não usamos abas** (Home / Explore do template). A tela Início ocupa o quadro do celular.

---

## 3. O arquivo `index.jsx` — imports

No topo do arquivo:

```jsx
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
```

Cada um faz uma coisa:

- **`View`**: uma “caixa”. Serve para agrupar e posicionar coisas. Não mostra texto sozinha.
- **`Text`**: mostra texto. No React Native, texto **precisa** ficar dentro de `Text` (não pode ir solto dentro de `View`).
- **`Image`**: mostra uma imagem (arquivo PNG, por exemplo).
- **`Pressable`**: área que **responde ao toque** (botão ou link).
- **`Alert`**: janelinha nativa (“OK”) no celular.
- **`StyleSheet`**: lugar para guardar os estilos (cores, tamanhos, margens), parecido com CSS, mas em objeto JavaScript.
- **`SafeAreaView`**: como um `View`, mas respeita o recorte da tela (notch, ilha, barra inferior). Evita o conteúdo ficar embaixo do relógio.

---

## 4. O componente `TelaInicio`

```jsx
export default function TelaInicio() {
```

É a função que **monta a tela**. Tudo o que ela `return` (retorna) aparece na interface.

### Funções dos botões

```jsx
function aoTocarComecar() {
  Alert.alert(
    'Caderneta+',
    'A próxima tela (cadastro) ainda será criada.'
  );
}
```

- `function aoTocarComecar()` cria uma função com um nome claro: “o que acontece quando tocar em Começar”.
- `Alert.alert(titulo, mensagem)` abre o aviso.
- Ainda **não** vamos para outra tela: cadastro e login virão depois. Por enquanto o toque só confirma que o botão funciona.

A função `aoTocarJaTenhoConta` faz o mesmo para o link de quem já tem conta.

---

## 5. O `return`: a estrutura visual (de cima para baixo)

Imagine a tela como uma coluna:

1. Fundo branco + dois círculos verdes claros nos cantos
2. Logo (escudo + nome)
3. Ilustração
4. Frase
5. Botão **Começar**
6. Link **Já tenho uma conta**

### `SafeAreaView` com `style={estilos.tela}`

`style={estilos.tela}` aplica o estilo chamado `tela` (definido no final do arquivo). É assim que ligamos o visual ao componente.

### Círculos nos cantos

```jsx
<View style={estilos.circuloCantoSuperior} />
<View style={estilos.circuloCantoInferior} />
```

São `View` vazias, só com cor e forma de círculo. `position: 'absolute'` tira elas do fluxo normal e cola nos cantos. Parte do círculo fica **fora** da tela (`top: -80`), então você só vê um pedaço suave no canto — o mesmo efeito do mockup.

### Logo

```jsx
<View style={estilos.logoLinha}>
  <View style={estilos.logoEscudo}>
    <Text style={estilos.logoMais}>+</Text>
  </View>
  <Text style={estilos.logoTexto}>Caderneta+</Text>
</View>
```

- `logoLinha` usa `flexDirection: 'row'`: os filhos ficam **lado a lado** (ícone + nome), não um embaixo do outro.
- `logoEscudo` é um quadrado arredondado verde-água.
- O `+` branco fica no centro porque o escudo tem `alignItems: 'center'` e `justifyContent: 'center'`.

### Ilustração

```jsx
<Image
  source={require('../../assets/images/inicio-ilustracao.png')}
  style={estilos.ilustracao}
  resizeMode="contain"
/>
```

- `require('...')` pede o arquivo de imagem **no momento em que o app é montado**. O caminho `../../` sobe duas pastas (`app` → `src` → raiz do projeto) e entra em `assets/images`.
- `resizeMode="contain"`: a imagem **cabe inteira** na caixa de 280×280, sem cortar.

### Frase

```jsx
<Text style={estilos.frase}>Cuidado e proteção em cada fase.</Text>
```

Texto centralizado (`textAlign: 'center'`), cor verde-escura, negrito (`fontWeight: '700'`).

### Botões

```jsx
<Pressable style={estilos.botaoComecar} onPress={aoTocarComecar}>
  <Text style={estilos.textoBotaoComecar}>Começar</Text>
</Pressable>
```

- `onPress={aoTocarComecar}`: **quando o usuário toca**, o React Native chama essa função.
- Não escrevemos `aoTocarComecar()` com parênteses aqui. Se puséssemos parênteses, a função rodaria **na hora** que a tela desenha, e não no toque. Passamos só o **nome** da função.
- O texto do botão precisa de um `Text` dentro do `Pressable`.

O link “Já tenho uma conta” também é um `Pressable`, mas **sem fundo**: só o texto parece um link.

---

## 6. `StyleSheet.create` — o visual

No final do arquivo:

```jsx
const estilos = StyleSheet.create({
  tela: { ... },
  botaoComecar: { ... },
  // etc.
});
```

`const` cria uma constante (não vamos trocar `estilos` por outro objeto depois). `StyleSheet.create` registra os estilos de um jeito que o React Native entende bem.

Propriedades que mais aparecem nesta tela:

| Propriedade | Para que serve |
| --- | --- |
| `flex: 1` | A tela cresce e ocupa o espaço disponível |
| `backgroundColor` | Cor de fundo (`#FFFFFF` = branco) |
| `alignItems: 'center'` | Centraliza os filhos na horizontal |
| `justifyContent: 'space-between'` | Espalha os blocos: logo em cima, botões embaixo, ilustração no meio |
| `paddingHorizontal` | Espaço interno à esquerda e à direita |
| `paddingVertical` | Espaço interno em cima e embaixo |
| `marginBottom` / `marginRight` | Espaço **fora** do componente |
| `width: '100%'` | O botão usa a largura toda da área (menos o padding da tela) |
| `borderRadius` | Cantos arredondados. Número alto (28) deixa o botão bem “pílula” |
| `fontSize` | Tamanho da letra |
| `fontWeight` | Grossura da letra (`'700'` = negrito) |
| `color` | Cor do texto |
| `position: 'absolute'` | Posiciona pelos cantos (`top`, `left`, `bottom`, `right`) |
| `borderRadius` igual à metade da largura | Transforma um quadrado em **círculo** |

Cores usadas (verde-água do Caderneta+):

- `#1A7A74` — botão e escudo
- `#1A4F4A` — textos
- `#E8F6F1` — círculos suaves no fundo
- `#FFFFFF` — fundo e texto do botão

---

## 7. Como `Pressable` e `Alert` trabalham juntos

1. A pessoa toca no botão.
2. O `Pressable` dispara `onPress`.
3. A função (`aoTocarComecar` ou `aoTocarJaTenhoConta`) roda.
4. `Alert.alert` mostra o aviso do sistema.

Quando as outras telas existirem, essas funções poderão usar navegação, por exemplo `router.push('/cadastro')`, no lugar do `Alert`.

---

## 8. Como ver a tela no celular (ou no computador)

No terminal, na pasta do projeto:

```bash
npx expo start
```

Depois:

- **Expo Go** no celular: leia o QR code
- **Android**: tecla `a`
- **Web**: tecla `w`

Você deve ver a tela Início **sem** as abas Home/Explore do template. Ao tocar em **Começar** ou **Já tenho uma conta**, aparece um alerta.

---

## 9. Resumo do que cada arquivo “é responsável”

- **`_layout.jsx`**: “como as telas se encaixam” (pilha, sem cabeçalho).
- **`index.jsx`**: “o que tem na primeira tela” (logo, imagem, textos, toques).
- **`inicio-ilustracao.png`**: só o desenho; o código da tela não desenha a mãe e o bebê à mão.

Se algo na tela mudar de lugar, o primeiro lugar para olhar é o objeto `estilos` no final de `index.jsx`.
