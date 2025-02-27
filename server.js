import express from 'express';
import tarefaRouter from './routers/tarefaRoutes.js'

const app = express();
const port = 3000;

app.use(express.json());
app.use('/tarefas', tarefaRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})