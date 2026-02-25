# ⏱️ CHRONOS - Contador e Cronômetro Interativo

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.2.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📋 Sobre o Projeto

**CHRONOS** é uma aplicação web moderna e interativa desenvolvida em React que oferece funcionalidades de contador e cronômetro com uma interface 3D imersiva. O projeto utiliza animações avançadas, efeitos de proximidade do mouse e um modelo 3D interativo para proporcionar uma experiência única ao usuário.

### ✨ Características Principais

- 🔢 **Contador Interativo** - Incrementa e decrementa valores com feedback visual
- ⏱️ **Cronômetro Funcional** - Controle de tempo com play/pause e reset
- 🎨 **Animações Fluidas** - Utilizando AOS (Animate On Scroll) e Motion
- 🖱️ **Efeito de Proximidade** - Texto responsivo ao movimento do mouse
- 🎯 **Cursor Personalizado** - Cursor interativo com animações GSAP que reage aos botões
- 🤖 **Modelo 3D Interativo** - Robô 3D renderizado com Spline
- 📱 **Design Responsivo** - Interface adaptável a diferentes dispositivos
- 💎 **Código Modular** - Arquitetura baseada em componentes reutilizáveis

## 🏗️ Estrutura do Projeto

```
src/
├── components/              # Componentes React reutilizáveis
│   ├── Contador/           # Componente de contador
│   │   └── Contador.jsx
│   ├── Cronometro/         # Componente de cronômetro
│   │   └── Cronometro.jsx
│   ├── Header/             # Cabeçalho da aplicação
│   │   └── Header.jsx
│   ├── Hero/               # Seção principal/hero
│   │   └── Hero.jsx
│   └── VariableProximity/  # Efeito de proximidade do mouse
│       ├── VariableProximity.jsx
│       └── VariableProximity.css
├── hooks/                  # Custom React Hooks
│   ├── useAnimationFrame.js
│   └── useMousePositionRef.js
├── utils/                  # Funções utilitárias
│   └── timeFormatter.js
├── assets/                 # Recursos estáticos
│   ├── images/            # Imagens do projeto
│   │   ├── robo.png
│   │   └── gradient.png
│   └── icons/             # Ícones
│       └── react.svg
├── styles/                # Estilos globais
│   └── index.css
├── TargetCursor.jsx       # Cursor personalizado interativo
├── TargetCursor.css       # Estilos do cursor
├── App.jsx                # Componente principal
└── main.jsx              # Ponto de entrada da aplicação
```

## 🚀 Tecnologias Utilizadas

### Core
- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **Vite 7.3.1** - Build tool e dev server ultrarrápido
- **Motion 12.34.3** - Biblioteca de animações para React

### Styling
- **TailwindCSS 4.2.1** - Framework CSS utility-first
- **DaisyUI 5.5.19** - Componentes prontos para Tailwind

### Animações e Efeitos
- **GSAP 3.14.2** - Biblioteca de animações de alta performance para cursor interativo
- **AOS (Animate On Scroll)** - Animações ao rolar a página
- **Spline Viewer** - Renderização de modelos 3D
- **Font Awesome 6.5.1** - Biblioteca de ícones

### Qualidade de Código
- **ESLint 9.39.1** - Linter para JavaScript/React
- **eslint-plugin-react-hooks** - Regras ESLint para React Hooks
- **eslint-plugin-react-refresh** - Suporte para Fast Refresh

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/Cauavaz/CHRONOS.git
cd CHRONOS
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

## 🛠️ Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Preview do build de produção
npm run lint     # Executa o linter ESLint
```

## 🎯 Funcionalidades

### Contador
- Incrementar e decrementar valores
- Indicador visual para números pares e ímpares
- Botão de reset para zerar o contador
- Animações suaves nas transições

### Cronômetro
- Iniciar/pausar contagem de tempo
- Formato MM:SS
- Reset para reiniciar a contagem
- Interface intuitiva com ícones

### Efeitos Visuais
- **Target Cursor**: Cursor personalizado com animações GSAP que reage aos botões e elementos interativos
- **Variable Proximity**: Texto que reage ao movimento do mouse
- **Animações AOS**: Elementos aparecem suavemente ao rolar
- **Modelo 3D**: Robô interativo renderizado em tempo real
- **Gradientes**: Fundo com efeitos de blur e gradiente

## 📱 Responsividade

O projeto foi desenvolvido com mobile-first em mente, garantindo uma experiência consistente em:
- 📱 Dispositivos móveis (smartphones)
- 📱 Tablets
- 💻 Desktops
- 🖥️ Telas grandes

## 🎨 Boas Práticas Implementadas

### Arquitetura
- ✅ Separação de responsabilidades (SoC)
- ✅ Componentes reutilizáveis e modulares
- ✅ Custom hooks para lógica compartilhada
- ✅ Funções utilitárias isoladas

### Código
- ✅ Nomenclatura clara e descritiva
- ✅ Código limpo e bem formatado
- ✅ Comentários quando necessário
- ✅ ESLint configurado

### Performance
- ✅ Lazy loading de componentes
- ✅ Otimização de re-renders
- ✅ Uso eficiente de hooks
- ✅ Build otimizado com Vite

### Acessibilidade
- ✅ Atributos ARIA quando necessário
- ✅ Semântica HTML adequada
- ✅ Suporte a leitores de tela

## 👨‍💻 Autor

**Cauã Vaz**
- GitHub: [@Cauavaz](https://github.com/Cauavaz)
- Projeto: [CHRONOS](https://github.com/Cauavaz/CHRONOS)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Suporte

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue no GitHub.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
