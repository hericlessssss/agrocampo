# AGROCAMPO Corrente - Website

![AGROCAMPO Logo](https://i.imgur.com/tdogxsx.png)

## 🌾 Sobre o Projeto

Website institucional da AGROCAMPO Corrente, uma empresa líder em produtos agropecuários localizada em Corrente - PI. O site apresenta os produtos, serviços e informações da empresa de forma moderna e responsiva.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e bundler
- **React Router DOM** - Roteamento e navegação
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones
- **React Hooks** - Gerenciamento de estado e ciclo de vida

## 🛠️ Estrutura do Projeto

```
src/
├── components/        # Componentes React reutilizáveis
├── pages/            # Páginas da aplicação
├── utils/            # Funções utilitárias
└── main.tsx          # Ponto de entrada da aplicação
```

## 📦 Instalação e Uso

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

4. Para build de produção:
```bash
npm run build
```

## 🌐 Deploy no Netlify

1. Crie uma conta no [Netlify](https://www.netlify.com/)

2. Configure o deploy:
   - Conecte seu repositório GitHub
   - Configure as variáveis de ambiente necessárias
   - Build command: `npm run build`
   - Publish directory: `dist`

3. Deploy automático:
   - O Netlify detectará automaticamente mudanças na branch principal
   - Cada push iniciará um novo deploy

4. Configurações adicionais:
   - Configure um domínio personalizado
   - Ative HTTPS
   - Configure redirecionamentos para SPA (criar arquivo `_redirects` ou `netlify.toml`)

## 🔧 Configuração de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=sua_url_api
```

## 📱 Recursos e Funcionalidades

- ✨ Design responsivo para todos os dispositivos
- 🎯 Navegação suave com scroll
- 🛍️ Catálogo de produtos
- 📱 Integração com WhatsApp
- 🚚 Seção de entregas
- 👥 Depoimentos de clientes
- 🤝 Parceiros e fornecedores

## 🔍 SEO e Performance

- Meta tags otimizadas
- Imagens otimizadas
- Lazy loading de imagens
- Performance otimizada (Lighthouse score > 90)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para suporte, envie um email para [contato@agrocampocorrente.com.br](mailto:contato@agrocampocorrente.com.br) ou entre em contato via WhatsApp: (89) 99973-1221.

---

Desenvolvido com ❤️ por [Labora Tech](https://www.instagram.com/labora_tech/)