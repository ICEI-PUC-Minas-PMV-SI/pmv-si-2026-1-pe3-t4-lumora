# ────୨ৎ──── Calendário Interativo ────୨ৎ────

Aplicação front-end de calendário desenvolvida em JavaScript puro, com foco em organização de código, manipulação de estado e renderização dinâmica de interface.

O projeto simula um calendário semanal com visualização diária detalhada, incluindo gerenciamento de tarefas, marcação de conclusão e uma agenda em formato de 24 horas.

## ────୨ৎ──── Objetivo ────୨ৎ────

O objetivo principal foi estruturar uma aplicação sem dependências externas, mantendo separação clara de responsabilidades dentro de um único arquivo JavaScript. A ideia é facilitar manutenção e permitir evolução futura (ex: integração com backend ou persistência de dados).

## ────୨ৎ──── Tecnologias ────୨ৎ────

- HTML5
- CSS3
- JavaScript (Vanilla)
- VS Code (Live Server)

## ────୨ৎ──── Estrutura do projeto ────୨ৎ────

```txt
calendar-app/
├── index.html
├── styles.css
├── script.js
└── README.md


────୨ৎ──── Como executar ────୨ৎ────
Usando Live Server (VS Code)
Abra o projeto no VS Code
Instale a extensão Live Server
Clique com o botão direito em index.html
Selecione Open with Live Server

A aplicação será servida localmente, normalmente em:

http://127.0.0.1:5500/

Não há necessidade de build ou instalação de dependências.

────୨ৎ──── Funcionalidades ────୨ৎ────

Calendário semanal
Exibição de 7 dias por semana
Destaque para o dia atual
Seleção de dia diretamente no calendário
Navegação entre semanas
Navegação
Botão "Hoje" baseado na data do sistema
Botão "Amanhã"
Navegação por semanas via setas
Resumo do dia
Exibição do dia selecionado
Data completa formatada em pt-BR
Campo de input para registrar estado/observação do dia (aceita texto e unicode/emoji)
Lista de tarefas do dia
Tarefas
Tarefas associadas a uma data (YYYY-MM-DD)
Exibição de:
horário
título
descrição
Possibilidade de marcar/desmarcar como concluída
Estado visual com line-through quando concluída
Agenda diária
Visualização em formato de 24 horas
Agrupamento de tarefas por hora
Renderização dinâmica baseada no estado atual

────୨ৎ──── Organização do código (script.js) ────୨ৎ────

O código foi estruturado em blocos para evitar acoplamento e facilitar leitura:

1. DOM selectors
2. Date helpers
3. State
4. Mock data
5. Task helpers
6. Render functions
7. Actions
8. Event listeners
9. Initial load

────୨ৎ──── Separação de responsabilidades ────୨ৎ────
dateUtils: funções puras relacionadas a manipulação de datas
state: fonte única de verdade da UI (selectedDate, visibleWeek, moods)
mockData: simulação de dados (substituível por backend)
taskService: lógica de acesso e mutação de tarefas
render: responsável por atualizar o DOM
actions: alterações de estado controladas
events: binding de eventos da interface

Essa abordagem reduz dependências implícitas e facilita a evolução do código.

────୨ৎ──── Modelo de dados (atual) ────୨ৎ────
{
  id: number,
  title: string,
  description: string,
  dueDate: string, // YYYY-MM-DD
  dueTime: string, // HH:mm
  completed: boolean
}

────୨ৎ──── Considerações ────୨ৎ────

Não há persistência de dados (estado em memória)
Estrutura preparada para futura integração com API
Não utiliza frameworks propositalmente (foco em fundamentos)

────୨ৎ──── Possíveis evoluções ────୨ৎ────
Persistência via localStorage ou backend
CRUD de tarefas (criar, editar, deletar)
Drag and drop na agenda
Filtros por categoria/prioridade
Timezone handling


────୨ৎ──── Autora ────୨ৎ────

⋆. 𐙚˚࿔ Caroline Selvecki 𝜗𝜚˚⋆

────୨ৎ──── carolineselvecki@gmail.com ────୨ৎ────