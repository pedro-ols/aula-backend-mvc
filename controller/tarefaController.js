import TarefaModel from '../models/tarefaModel.js';

class TarefaController{
    getAll = (req, res) => {
        const tarefas = TarefaModel.getAll();
        res.json(tarefas)
    };
    create = ({ body: { descricao }}, res) => {
        if(!descricao){
            res.status(400).json({message: 'Descrição é obrigatória'});
        };
        const novaTarefa = TarefaModel.create(descricao);
        res.status(201).json(novaTarefa);
    };
    update = ({ params: { id }, body: { concluida } }, res) => {
        const tarefaAtualizada = tarefaModel.update(id, concluida);
        if (!tarefaAtualizada) {
            return res.status(404).json({ erro: "Não encontrado"})
        };
        res.json(tarefaAtualizada);
    };
    delete = ({ params: { id } }, res) => {
        const sucesso = tarefaModel;
        if(!sucesso) {
            return res.status(404).json({ erro: "Não encontrado"});
        };
        res.status(204).send();
    };
};

export default new TarefaController();