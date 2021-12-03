import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export const all = async (req: Request, res: Response) => {
  const users = await UserService.findAll();
  res.json({ users });
};

export const create = async (req: Request, res: Response) => {
  const { email, name, age } = req.body;

  if (email && name) {
    // TODO: Validar e-mail com REGEX

    const user = await UserService.findOne({ email });

    if (!user) {
      const newUser = await UserService.create({
        email,
        name,
        age: age ? parseInt(age) : 0,
      });
      res.status(201).json({ user: newUser });
    } else {
      res.json({ error: 'Já existe usuário com esse e-mail' });
    }
  } else {
    res.json({ error: 'Dados não preenchidos.' });
  }
};
