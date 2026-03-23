# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Nesta parte do trabalho você deve detalhar a documentação dos requisitos do sistema proposto de acordo com as seções a seguir. Ressalta-se que aqui é utilizado como exemplo um sistema de gestão de cursos de aperfeiçoamento.

## 3.1 Objetivos deste documento
Descrever e especificar as necessidades da Coordenação do Curso de Sistemas de Informação da PUC Minas que devem ser atendidas pelo projeto SCCA – Sistema de Cadastro de Cursos de Aperfeiçoamento.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado Lumora  – luz do latim "lumen" que significa iluminação, clareza. "ora" - algo que soa suave, fluido meio etéreo. Ele contará com diversos componentes para atender a necessidade da aplicação e do usuário.

### 3.2.2 Missão do produto
Criar uma ferramenta que funcione do jeito que o cérebro com TDAH precisa: simples, visual, rápida e motivadora, ajudando o usuário a iniciar, manter e concluir tarefas com menos esforço mental. 

### 3.2.3 Limites do produto
Seu escopo é limitado às funções essenciais de gestão de tarefas, priorizando simplicidade e baixa sobrecarga cognitiva. O aplicativo apoia a organização de tarefas diárias para pessoas com Transtorno de Déficit de Atenção e Hiperatividade, sem substituir acompanhamento profissional.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade no cadastro de dados |	Essencial |
|2 | Facilidade na recuperação de informações | Essencial | 
|3 | Segurança no cadastro de matrículas | Essencial | 
|4	| Melhoria na comunicação com os alunos	| Recomendável | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Gerenciar Curso de Aperfeiçoamento |	Processamento de Inclusão, Alteração, Exclusão e Consulta de Cursos de Aperfeiçoamento |
| RF2 |	Gerenciar Professor	| Processamento de Inclusão, Alteração, Exclusão e Consulta de professores |
| RF3	| Gerenciar Matrícula |	Processamento de Inclusão, Alteração, Exclusão e Consulta de Matrículas de alunos em Cursos de Aperfeiçoamento |
| ... |	...	| ... |

### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) |
|--------------------|------------------------------------|
| RNF1 | O ambiente operacional a ser utilizado é o Windows XP. |
| RNF2 | O sistema deverá executar em um computador configurado com uma impressora de tecnologia laser ou de jato de tinta, a ser usada para impressão dos relatórios. |
| RNF3 |	Segurança	O produto deve restringir o acesso por meio de senhas individuais para o usuário. |
| ... |	... |	... |

### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Coordenador |	Usuário gerente do sistema responsável pelo cadastro e manutenção de cursos de aperfeiçoamento. Possui acesso geral ao sistema. |
| Secretaria |	Usuário responsável por registros de alunos, professores, turmas e gerência de matrículas. |
| ... |	... |	... |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](/src/img/diagrama-caso-de-uso.png)
 
### 3.4.2 Descrições de Casos de Uso

#### Ativar Notificação (CSU01)

Sumário:
Permite ao sistema de notificações ativar o envio de alertas ao usuário relacionados a tarefas e lembretes configurados.

Ator Primário: Sistema de Notificações
Ator Secundário: Usuário

Pré-condições:
O usuário deve possuir lembretes configurados no sistema.

Fluxo Principal: 

1. O sistema identifica um lembrete programado.
2. O sistema ativa a notificação no horário definido pelo usuário.
3. A notificação é enviada ao usuário.
4. O usuário visualiza a notificação.

Pós-condições:
O usuário é informado sobre tarefas ou compromissos por meio de notificação.

#### Gerenciar Tarefas (CSU02)

Sumário:
O usuário realiza o gerenciamento de tarefas (inclusão, alteração, remoção e consulta).

Ator Primário: Usuário.

Pré-condições:
O usuário deve estar com acesso ao aplicação.

Fluxo Principal:

1. O usuário acessa a área de tarefas.
2. O sistema apresenta a lista de tarefas cadastradas.
3. O Sistema apresenta as operações que podem ser realizadas: inclusão de uma nova tarefa, alteração, exclusão e a consulta de dados.
4. O usuário seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.
5. O sistema executa a ação solicitada.
6. O sistema atualiza a lista de tarefas.
7. O caso de uso é finalizado. 

Fluxo Alternativo (3): Inclusão
 
a) O usuário solicita a inclusão de uma nova tarefa. <br>
b) O sistema apresenta um formulário para preenchimento. <br>
c) O usuário informa os dados da tarefa (título, hora, duração, subtarefa e descrição). <br>
d) O sistema valida os dados. <br>
e) Se válidos, a tarefa é cadastrada; caso contrário, o sistema solicita correção. <br>

Fluxo Alternativo (3): Remoção

a) O usuário seleciona uma tarefa. <br>
b) O usuário solicita a exclusão. <br>
c) O sistema confirma a exclusão da tarefa ao usuário. <br>
d) O sistema remove a tarefa. <br>

Fluxo Alternativo (3): Alteração

a) O usuário seleciona uma tarefa. <br>
b) O usuário altera os dados. <br>
c) O sistema confirma a alteração da tarefa. <br>
d) O sistema valida e atualiza as informações. <br>
 
Fluxo Alternativo (3): Consulta
 
a) O Usuário acessa lista de tarefas. <br>
b) O Sistema exibe tarefas por data. <br>
c) O Sistema exibe tarefas conforme a rolagem. <br>
d) Nenhuma tarefa é encontrada para um dia. <br>
e) Sistema exibe "Nenhuma tarefa cadastrada neste dia". <br>
f) Usuário continua navegando ou cria nova tarefa. <br>

Pós-condições: Uma tarefa foi incluída, removida, seus dados foram alterados e consultados.

#### Configurar lembretes (CSU03)

Sumário:
Permite ao usuário configurar lembretes associados às tarefas para receber notificações.

Ator Primário: Usuário

Pré-condições:
O usuário deve possuir ao menos uma tarefa cadastrada e acessar a funcionalidade de configuração de lembretes.

Fluxo Principal:

1. O usuário seleciona uma tarefa.
2. O usuário acessa a opção de configurar lembrete.
3. O sistema solicita a data e o horário do lembrete.
4. O usuário define as informações.
5. O usuário ativa o lembrete por meio do ícone de sino disponível na interface.
6. O sistema verifica se o lembrete foi ativado.
7. Caso ativado, o sistema salva o lembrete e agenda a notificação.
8. Caso o lembrete não seja ativado, a notificação não será enviada.

Pós-condições:
O lembrete será salvo e a notificação será enviada apenas se o usuário ativar o lembrete por meio do ícone de sino.

### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![image](https://github.com/user-attachments/assets/abc7591a-b46f-4ea2-b8f0-c116b60eb24e)


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Aluno |	Cadastro de informações relativas aos alunos. |
| 2	| Curso |	Cadastro geral de cursos de aperfeiçoamento. |
| 3 |	Matrícula |	Cadastro de Matrículas de alunos nos cursos. |
| 4 |	Turma |	Cadastro de turmas.
| 5	|	Professor |	Cadastro geral de professores que ministram as disciplinas. |
| ... |	... |	... |
