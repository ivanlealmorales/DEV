function ListaTarefas() {
    this.tarefas = [];
  
    this.adicionarTarefa = function(descricao) {
      this.tarefas.push(descricao);
    };
  
    this.exibirTarefas = function() {
      this.tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa}`);
      });
    };
  }
  
  const listaMinhasTarefas = new ListaTarefas();
  
  listaMinhasTarefas.adicionarTarefa("Estudar JavaScript");
  listaMinhasTarefas.adicionarTarefa("Fazer compras");
  listaMinhasTarefas.exibirTarefas();
  