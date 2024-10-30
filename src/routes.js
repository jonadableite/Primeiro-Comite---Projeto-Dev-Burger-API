import { Router } from 'express';
import { v4 } from 'uuid';

import User from './app/models/User';

const router = new Router();

router.get('/', async (req, res) => {
  const users = await User.create({
    id: v4(),
    name: 'Jonadab Leite',
    email: 'jonadab.leite@gmail.com',
    password_hash: '123456',
  });

  return res.status(201).json(users);
});

export default router;
