import { Router } from "express";


const router = Router();

type Usuario = {
    id: string,
    name: string,
}

router.get('/', (req, res) => {
    res.send('Hola Mundo');
});

router.post('/', (req, res) => {
    // const { name } = req.body as Usuario;
    const { name } = (req.body ?? {}) as Partial<Usuario>;
    console.log(name);
    res.send('ok');
});


export default router;
