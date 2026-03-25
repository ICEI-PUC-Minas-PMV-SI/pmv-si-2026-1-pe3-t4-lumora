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

1. O usuário acessa a função de criação de tarefas por meio da tela inicial do sistema.
2. O sistema apresenta um formulário apresentando os campos necessários para o cadastro da tarefa.
3. O usuário preenche as informações solicitadas, como título, descrição e prazo, podendo incluir funcionalidades opcionais, como categorização, definição de prioridade e configuração de lembretes para a tarefa.
4. Após o preenchimento, o usuário confirma a criação da tarefa.
5. O sistema realiza a validação dos dados informados e, estando corretos, registra a tarefa no sistema.

Fluxo Alternativo (3): Categorizar tarefa

a) Durante o processo de criação, o usuário pode optar por atribuir uma categoria e grau de prioridade à tarefa. <br>
b) O sistema exibe as categorias e prioridades disponíveis para seleção. <br>
c) O usuário escolhe a categoria e prioridade desejada. <br>
d) O sistema associa a categoria e prioridade à tarefa antes de efetivar o cadastro. <br>

Fluxo Alternativo (3): Definir lembrete 

a) O usuário pode optar por configurar um lembrete para a tarefa. <br>
b) O sistema solicita a definição de data e horário. <br>
c) O usuário informa os dados e ativa o lembrete por meio de um ícone de sininho presente na interface. <br>
d) O sistema registra o lembrete vinculado à tarefa. <br>
e) Caso o usuário não ative o sininho, o lembrete não será considerado ativo e, portanto, nenhuma notificação será enviada. <br>

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
b) O sistema exibe as informações já cadastradas. <br>
c) O usuário altera os dados ou ativa/desativa o lembrete por meio do ícone de sininho. <br>
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
2. O usuário seleciona uma tarefa de interesse.
3. O sistema exibe todas as informações relacionadas à tarefa selecionada.

Pós-condições:

As informações da tarefa são apresentadas ao usuário.

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
Permite ao usuário personalizar suas informações dentro do sistema. 

Ator Primário: Usuário

Pré-condições:
O usuário deve possuir uma conta cadastrada. 

Fluxo Principal: 

1. O usuário acessa a área de perfil.
2. O sistema apresenta os dados cadastrados atualmente.
3. O usuário escolhe qual informação deseja alterar, dados pessoais, senha ou tema.
4. O sistema processa e aplica as alterações realizadas.

Fluxos Alternativo (3): Alterar dados

a) O usuário seleciona a opção de edição de dados pessoais. <br>
b) O sistema exibe as informações atuais.<br>
c) O usuário realiza as alterações desejadas. <br>
d) O sistema valida e salva os novos dados. <br>

Fluxo Alternativo (3): Alterar senha

a) O usuário acessa a opção de alteração de senha. <br>
b) O sistema solicita a senha atual e a nova senha. <br>
c) O usuário informa a nova senha. <br>
d) O sistema valida e atualiza a senha com sucesso. <br>

Fluxo Alternativo (3): Alterar tema

a) O usuário acessa a opção de personalização de tema. <br>
b) O sistema apresenta as opções disponíveis. <br>
c) O usuário seleciona o tema desejado. <br>
d) O sistema aplica a alteração na interface. <br>

Pós-condições:

As preferências e dados do usuário são atualizados conforme suas escolhas.

#### Iniciar Modo Foco (CSU07)

Sumário:
Permite ao usuário iniciar uma sessão de foco por meio de um timer, auxiliando na concentração durante a execução de tarefas.

Ator Primário: Usuário

Pré-condições:
O usuário deve estar utilizando o sistema.

Fluxo Principal:
1. O usuário acessa e configura a funcionalidade de modo foco.
2. O usuário inicia a sessão de foco.
4. O sistema inicia o timer com o tempo definido.
3. O sistema exibe a contagem regressiva, permitindo o acompanhamento do tempo restante.

Pós-condições:

A sessão de foco é executada e finalizada conforme as ações realizadas pelo usuário.


### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![image](/src/img/Diagrama-de-classes-lumora.png)


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Usuário |	Cadastro de informações relativas aos alunos. |
| 2	| Tarefa |	Cadastro geral de cursos de aperfeiçoamento. |
| 3 |	Lembrete |	Cadastro de Matrículas de alunos nos cursos. |
| 4 |	Notificação |	Cadastro de turmas.
| 5	|	Timer |	Cadastro geral de professores que ministram as disciplinas. |
| 6 |	Tema |	... |
| 7 | Imagem | |
| 8 | UsuárioTema | |
