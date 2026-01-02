# AGROCAMPO Corrente - Website

![AGROCAMPO Logo](https://i.imgur.com/tdogxsx.png)

## 🌾 Sobre o Projeto

Website institucional da AGROCAMPO Corrente, uma empresa líder em produtos agropecuários localizada em Corrente - PI. O site apresenta os produtos, serviços e informações da empresa de forma moderna e responsiva.

## 🔄 Atualização das Cotações CEPEA

Para manter as cotações do CEPEA atualizadas, siga estas instruções:

1. Acesse o site do CEPEA: [https://www.cepea.esalq.usp.br](https://www.cepea.esalq.usp.br)

2. Navegue até as cotações dos seguintes produtos:
   - Boi Gordo
   - Bezerro
   - Milho
   - Soja

3. Abra o arquivo `src/data/quotations.ts`

4. Atualize os valores no arquivo com as novas cotações:
   ```typescript
   export const quotations = [
     {
       id: 'boi-gordo',
       nome: 'Boi Gordo',
       valor: 'R$ 000,00', // Novo valor
       variacao: '+0.0%',  // Nova variação
       ultimaAtualizacao: '2024-03-19' // Data atual
     },
     // ... outros produtos
   ];
   ```

5. Certifique-se de:
   - Usar o formato correto para valores (R$ XXX,XX)
   - Incluir o sinal (+/-) nas variações
   - Atualizar a data no formato YYYY-MM-DD

6. Após a atualização, faça o commit e deploy das alterações.

> **Importante**: As cotações devem ser atualizadas diariamente para manter a relevância das informações.
