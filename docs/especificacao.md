# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE


## 3.1 Objetivos deste documento
Este documento tem como finalidade descrever de forma clara e detalhada os requisitos e as funcionalidades do Software Lumora, evidenciando seus principais componentes a o objetivo que a aplicação busca atingir. 

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado Lumora  – luz do latim "lumen" que significa iluminação, clareza. "ora" - algo que soa suave, fluido meio etéreo. O software Lumora tem como finalidade oferecer ao usuário uma plataforma eficiente para organização e gerenciamento de suas atividades diárias. Por meio do sistema, o usuário poderá criar, editar e excluir tarefas, além de configurar lembretes para auxiliar no cumprimento de prazos e compromissos. O Lumora disponibiliza também um modo foco, que permite ao usuário se concentrar em suas atividades com o auxílio de um temporizador (timer), contribuindo para o aumento da produtividade e melhor gestão do tempo.

### 3.2.2 Missão do produto
Auxiliar pessoas que possuem TDAH no planejamento e organização de tarefas, proporcionando redução de sobrecarga cognitiva por meio de uma experiência simples, visual, rápida e motivadora, ajudando o usuário a iniciar, manter e concluir suas atividades diárias. Através de uma interface intuitiva, o produto visa reduzir a sobrecarga mental e facilitar a organização das tarefas de forma leve e fluida.

### 3.2.3 Limites do produto
Seu escopo é limitado às funções essenciais de gestão de tarefas, priorizando simplicidade e baixa sobrecarga cognitiva. O software apoia a organização de tarefas diárias para pessoas com Transtorno de Déficit de Atenção e Hiperatividade, sem substituir acompanhamento profissional.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade no cadastro de dados |	Essencial |
|2 | Facilidade na recuperação de informações | Essencial | 
|3 | Redução da desorganização por meio de gerenciamento simplificado de tarefas | Essencial | 
|4	| Melhoria do foco com uso de timer, divisão de tarefas e checklists	| Essencial |
|5	| Diminuição da sobrecarga cognitiva com interface simples e intuitiva	| Essencial |
|6	| Apoio à memória com lembretes e acompanhamento de prazos	| Essencial |
|7	| Aumento da produtividade e conclusão de tarefas	| Recomendável |
|8	| Melhoria do bem-estar emocional e sensação de controle	| Recomendável |


## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código de Requisito | Requisito Funcional            | Descrição                                                                 |
|--------------------|------------------------------|---------------------------------------------------------------------------|
| RF01               | Cadastro de usuário          | Permitir que o usuário crie uma conta com e-mail e senha.                |
| RF02               | Login de usuário             | Permitir que o usuário acesse sua conta com credenciais válidas.         |
| RF03               | Criar tarefas                | Permitir ao usuário adicionar tarefas à sua rotina diária.               |
| RF04               | Editar tarefas               | Permitir modificar informações de uma tarefa existente.                  |
| RF05               | Excluir tarefas              | Permitir remover tarefas da rotina.                                      |
| RF06               | Definir horários             | Permitir atribuir horário de início e fim para cada tarefa.              |
| RF07               | Notificações                 | Enviar lembretes quando uma tarefa estiver próxima de iniciar.           |
| RF08               | Temporizador visual          | Exibir contagem regressiva para a tarefa atual.                          |
| RF09               | Visualização de agenda       | Mostrar as tarefas organizadas por dia/horário.                          |
| RF10               | Marcar tarefa como concluída | Permitir ao usuário marcar tarefas finalizadas.                          |
| RF11               | Personalização visual        | Permitir uso de cores ou ícones para diferenciar tarefas.                |
| RF12               | Repetição de tarefas         | Permitir configurar tarefas recorrentes (diárias, semanais).             |
| RF13               | Modo foco                    | Destacar apenas a tarefa atual para reduzir distrações.                  |
| RF14               | Histórico de tarefas         | Permitir visualizar tarefas já concluídas anteriormente.                 |


### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) | Descrição |
|--------|---------------------------------------|-----------|
| RNF1 | Usabilidade – Interface simplificada | A interface deve ser limpa e intuitiva, com no máximo 3 cliques para acessar qualquer funcionalidade principal, reduzindo a sobrecarga cognitiva do usuário com TDAH. |
| RNF2 | Usabilidade – Feedback visual imediato | Toda ação do usuário (criar, editar, excluir, concluir tarefa) deve fornecer feedback visual em até 1 segundo, por meio de animações, cores ou mensagens de confirmação. |
| RNF3 | Desempenho – Tempo de resposta | As páginas do sistema devem ser carregadas em no máximo 3 segundos em conexões de banda larga padrão (10 Mbps ou superior). |
| RNF4 | Desempenho – Timer do Modo Foco | O timer do modo foco deve manter precisão de contagem com margem de erro inferior a 1 segundo por sessão de até 60 minutos. |
| RNF5 | Segurança – Autenticação | O sistema deve restringir o acesso por meio de autenticação com e-mail e senha individual, garantindo que cada usuário acesse apenas seus próprios dados. |
| RNF6 | Segurança – Armazenamento de senhas | As senhas dos usuários devem ser armazenadas de forma criptografada utilizando algoritmos de hash seguros (ex.: bcrypt), nunca em texto puro. |
| RNF7 | Disponibilidade | O sistema deve estar disponível pelo menos 99% do tempo durante o horário de uso comum (6h às 00h), permitindo manutenções programadas fora desse período. |
| RNF8 | Compatibilidade – Navegadores | O sistema deve ser compatível com as versões mais recentes dos navegadores Google Chrome, Mozilla Firefox, Microsoft Edge e Safari. |
| RNF9 | Compatibilidade – Responsividade | A interface deve ser responsiva, adaptando-se adequadamente a dispositivos com resolução mínima de 360px de largura (smartphones) até monitores desktop. |
| RNF10 | Acessibilidade – Contraste e legibilidade | O sistema deve respeitar uma proporção mínima de contraste de 4.5:1 entre texto e fundo, conforme as diretrizes WCAG 2.1 nível AA, garantindo legibilidade em todos os temas disponíveis. |
| RNF11 | Confiabilidade – Persistência de dados | Os dados do usuário (tarefas, configurações, temas desbloqueados) devem ser persistidos em banco de dados, garantindo que não sejam perdidos em caso de fechamento inesperado do navegador. |
| RNF12 | Manutenibilidade – Padrão de código | O código-fonte deve seguir padrões de organização e boas práticas de desenvolvimento, facilitando a manutenção e evolução do sistema por diferentes membros da equipe. |

### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Usuário |	Usuário principal do sistema, responsável pelo gerenciamento de tarefas, incluindo criação, edição, organização e conclusão de atividades, bem como pela utilização de funcionalidades de apoio à produtividade, como o timer de foco e a configuração de lembretes. |


## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Nesta seção são apresentadas as descrições dos principais casos de uso do sistema, com o objetivo de detalhar, de forma clara, como o usuário interage com as funcionalidades disponíveis e como o sistema responde a essas ações no contexto de uso.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](/src/img/diagrama-caso-de-uso.png)
 
### 3.4.2 Descrições de Casos de Uso

#### Criar Tarefa (CSU01)

Sumário:
Permite que o usuário cadastre uma nova tarefa no sistema.

Ator Primário: Usuário

Pré-condições:
O usuário deve estar autenticado no sistema.

Fluxo Principal: 

1. O usuário acessa a funcionalidade de criação de tarefas por meio da tela inicial do sistema.
2. O sistema apresenta um formulário com os campos necessários para o cadastro da tarefa.
3. O usuário preenche as informações solicitadas, como título, descrição, prazo..., podendo incluir funcionalidades opcionais, como categorização, definição de prioridade e configuração de lembretes.
4. Após o preenchimento, o usuário confirma a criação da tarefa.
5. O sistema valida os dados informados e, estando corretos, registra a tarefa no sistema.

Fluxo Alternativo (3): Categorizar tarefa

a) Durante o processo de preenchimento, o usuário pode optar por definit uma categoria e prioridade para a tarefa. <br>
b) O sistema exibe as categorias e prioridades disponíveis para seleção. <br>
c) O usuário seleciona a categoria e prioridade desejadas. <br>
d) O sistema associa a categoria e a prioridade à tarefa antes de finalizar o cadastro. <br>

Fluxo Alternativo (3): Definir lembrete 

a) O usuário pode optar por configurar um lembrete para a tarefa. <br>
b) O sistema solicita a definição de data e horário. <br>
c) O usuário informa os dados e ativa o lembrete por meio de um ícone de sininho presente na interface. <br>
d) O sistema registra o lembrete vinculado à tarefa. <br>
e) Caso o usuário não ative o sininho, o lembrete não será considerado ativo e nenhuma notificação será enviada. <br>

Pós-condições:
A tarefa é registrada no sistema e passa a fazer parte da lista de atividades do usuário.

#### Editar Tarefa (CSU02)

Sumário:
Permite ao usuário alterar informações de uma tarefa previamente cadastrada, possibilitando ajustes conforme sua necessidade.

Ator Primário: Usuário.

Pré-condições:
É necessário que exista ao menos uma tarefa cadastrada no sistema.

Fluxo Principal:

1. O usuário acessa a lista de tarefas disponíveis.
2. O usuário seleciona a tarefa que deseja editar.
3. O sistema apresenta os dados atuais da tarefa.
4. O usuário realiza as modificações necessárias.
5. O sistema valida as alterações e atualiza as informações da tarefa.

Fluxo Alternativo (4): Alterar lembrete
 
a) Durante a edição, o usuário pode acessar a opção de configuração de lembrete. <br>
b) O sistema exibe os dados atuais do lembrete. <br>
c) O usuário altera as informações ou ativa/desativa o lembrete por meio do ícone de sininho. <br>
d) O sistema valida e atualiza o lembrete conforme as alterações realizadas. <br>

Pós-condições:
A tarefa passa a conter as alterações realizadas pelo usuário.

#### Excluir Tarefa (CSU03)

Sumário:
Permite ao usuário remover uma tarefa do sistema, quando ela não for mais necessária.

Ator Primário: Usuário

Pré-condições:
O usuário deve possuir ao menos uma tarefa cadastrada.

Fluxo Principal:

1. O usuário acessa a lista de tarefas cadastradas.
2. O usuário seleciona a tarefa que deseja excluir.
3. O usuário solicita a exclusão da tarefa.
4. O sistema exibe uma mensagem solicitando a confirmação da ação por parte do usuário, evitando exclusões acidentais.
5. O usuário confirma a exclusão.
6. O sistema remove a tarefa da lista.

Fluxo Alternativo (4): Cancelar exclusão 

a) Ao receber a solicitação de confirmação, o usuário pode optar por cancelar a operação. <br>
b) O sistema interrompe o processo de exclusão. <br>
c) A tarefa permanece cadastrada, sem qualquer alteração. <br>

Pós-condições:
A tarefa é removida do sistema apenas se a exclusão for confirmada pelo usuário.

#### Consultar Tarefa (CSU04)

Sumário:
Permite ao usuário visualizar os detalhes de uma tarefa cadastrada, facilitando o acompanhamento das atividades.

Ator Primário: Usuário

Pré-condições:
O usuário deve possuir tarefas cadastradas.

Fluxo Principal:

1. O usuário acessa a lista de tarefas disponíveis.
2. O usuário seleciona à tarefa de interesse.
3. O sistema exibe todas as informações relacionadas à tarefa selecionada.

Pós-condições:

As informações da tarefa são exibidas ao usuário.

#### Criar Conta (CSU05)

Sumário:
Permite que um novo usuário realize seu cadastro no sistema, tornando-se apto a utilizar suas funcionalidades.

Ator Primário: Usuário

Fluxo Principal: 

1. O usuário acessa a opção de criação de conta.
2. O sistema apresenta um formulário de cadastro.
3. O usuário preenche os dados solicitados.
4. O sistema valida as informações fornecidas.
5. Estando tudo correto, o sistema cria a conta do usuário.

Pós-condições:

O usuário passa a ter acesso ao sistema por meio de sua conta.

#### Configurar Perfil (CSU06)

Sumário:
Permite ao usuário personalizar suas informações no sistema. 

Ator Primário: Usuário

Pré-condições:
O usuário deve possuir uma conta cadastrada. 

Fluxo Principal: 

1. O usuário acessa a área de perfil.
2. O sistema apresenta os dados cadastrados.
3. O usuário escolhe qual informação deseja alterar (dados pessoais, senha ou tema).
4. O sistema processa e aplica as alterações realizadas.

Fluxos Alternativo (3): Alterar dados

a) O usuário seleciona a opção de edição de dados pessoais. <br>
b) O sistema exibe os dados atuais.<br>
c) O usuário realiza as alterações desejadas. <br>
d) O sistema valida e salva os novos dados. <br>

Fluxo Alternativo (3): Alterar senha

a) O usuário acessa a opção de alteração de senha. <br>
b) O sistema solicita a senha atual e a nova senha. <br>
c) O usuário informa a nova senha. <br>
d) O sistema valida e atualiza a senha com sucesso. <br>

Fluxo Alternativo (3): Alterar tema

a) O usuário acessa a opção de personalização de tema. <br>
b) O sistema apresenta os temas disponíveis. <br>
c) O usuário seleciona o tema desejado. <br>
d) O sistema aplica a alteração na interface. <br>

Pós-condições:

As informações e preferências do usuário são atualizados conforme suas escolhas.

#### Iniciar Modo Foco (CSU07)

Sumário:
Permite ao usuário iniciar uma sessão de foco por meio de um timer, auxiliando na concentração durante a execução de tarefas.

Ator Primário: Usuário

Pré-condições:
O usuário deve estar utilizando o sistema.

Fluxo Principal:
1. O usuário acessa a funcionalidade de modo foco. 
2. O usuário configura o tempo da sessão.
3. O usuário inicia a sessão de foco.
4. O sistema inicia o timer com o tempo definido.
5. O sistema exibe a contagem regressiva, permitindo o acompanhamento do tempo restante.

Fluxo Alternativo (3): Pausar timer

a) O usuário pode pausar a sessão durante sua execução. <br>
b) O sistema interrompe temporariamente a contagem do tempo. <br>

Fluxo Alternativo (3): Adicionar tempo 

a) O usuário opta por adicionar mais tempo à sessão. <br>
b) O sistema ajusta o tempo restante do timer. <br>

Fluxo Alternativo (3): Finalizar foco 

a) O usuário opta encerrar a sessão antes do término. <br>
b) O sistema finaliza o timer. <br>

Pós-condições:

A sessão de foco é executada e finalizada conforme as ações realizadas pelo usuário.


### 3.4.3 Diagrama de Classes 

Nesta seção são apresentadas as descrições dos principais casos de uso do sistema, com o objetivo de detalhar, de forma clara e organizada, como ocorre a interação do usuário com as funcionalidades disponíveis, bem como o comportamento do sistema diante das ações realizadas durante sua utilização.

#### Figura 2: Diagrama de Classes do Sistema.
 
![image](/src/img/Diagrama-de-classes-lumora.png)


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Usuário |	Representa o usuário do sistema, responsável por gerenciar tarefas, utilizar o modo foco e personalizar o aplicativo. |
| 2	| Tarefa |	Representa uma atividade criada pelo usuário, podendo ser acompanhada por tempo e marcada como concluída. |
| 3 |	Lembrete | Representa um alerta configurado para uma tarefa. |
| 4 |	Notificação |	Representa a mensagem enviada ao usuário como alerta de eventos (ex: lembretes). |
| 5	|	Timer |	Representa o controle de tempo de uma tarefa no modo foco. |
| 6 |	Tema |	Representa a personalização visual do aplicativo, funcionando também como sistema de recompensas (gamificação). |
| 7 | Imagem | Representa a imagem associada ao perfil do usuário. |
| 8 | UsuárioTema | Representa a relação entre usuário e temas, indicando quais temas foram desbloqueados e qual está em uso. |
