# React Native To-Do App

Aplicativo móvel simples para gerenciar tarefas: adicionar, editar, remover e registrar conclusão de tarefas ( CRUD's ) .Construído com React Native, TypeScript e JSON Server.

## Tecnologias utilizadas

- React Native  
- TypeScript  
- JSON Server (para backend simulado)  
- ESLint + Prettier  
- React Navigation (se usado)  

## Funcionalidades

- Adicionar, editar e excluir tarefas  
- Marcar tarefas como concluídas  
- Sincronização com JSON Server (db.json)

## Como executar

```bash
git clone https://github.com/Igorloff/ToDo-Application-in-React-native-.git
cd ToDo-Application-in-React-native-
npm install

# Iniciar JSON Server
npm run backend

# Iniciar o aplicativo
npm run dev
```

## Demonstração

O coração desse projeto consiste na tela de listagem de tarefas. Qual temos a possibilidade de criar novas, editar ou excluir conforme seu desejo: 
<img width="1900" height="919" alt="Captura de tela 2025-08-25 164252" src="https://github.com/user-attachments/assets/a8225540-f043-43d3-a846-73bba21e3418" />

Exemplo de edição:
<img width="1896" height="931" alt="image" src="https://github.com/user-attachments/assets/6de8973f-fbe9-48db-904d-c2efbed90bd9" />

Após a edição, contamos com uma mensagem temporária para sinalizar que a ação foi realizada:
 <img width="1898" height="936" alt="image" src="https://github.com/user-attachments/assets/e0f249b4-7346-4582-a76a-1460ec8a2270" />
