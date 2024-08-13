import { Router } from "express";
import PostConroller from "./PostConroller.js";
const router = new Router();

router.post('/posts', PostConroller.create)
router.get('/posts', PostConroller.getAll)
router.get('/posts/:id', PostConroller.getOne)
router.put('/posts',PostConroller.update)
router.delete('/posts/:id',PostConroller.delete)
// Здесь нужно добавить логику для остальных маршрутов, если она есть

export default router; // Правильный синтаксис экспорта по умолчанию
