class TarefaModel {
    constructor() {
        this.tarefa = [
            { id: 1, descricao: 'Estudar JavaSrcipt', concluida: true },
        ];        
    };
    getAll = () => this.tarefas;

    create = (descricao) => {
        const novaTarefa = {
            id: this.tarefas.length = 1, descricao, concluída: false,
        };
        this.tarefa.push(novaTarefa);
        return novaTarefa;
    };
    update = (id, concluida) => {
        const tarefa = this.tarefas.find((t) => t.id === (id));
        if (tarefa) {
            tarefa.concluida = concluida !== undefined ? concluida : tarefa.concluida;
            return tarefa;
        };
        return null;
    };
    delete = () => {
        const index = this.find.findIndex((t) => t.id === id);
        if (index !== -1){
            this.tarefas.splice(index, 1);
            return true;
        };
        return false;
    };
};

export default TarefaModel;