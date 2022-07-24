import * as express from "express"
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { validate } from "class-validator";
import { User } from "../entity/User";

export const router = express.Router();

router.get('/users', async (req: Request, res: Response) => {
  const users = await AppDataSource.getRepository(User).find();

  return res.status(200).json({"users": users});
});

router.post('/user/create', async (req: Request, res: Response) => {

  let user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;

  const errors = await validate(user);

  if(errors.length > 0) {
    return res.status(400).json({ error: errors[0].constraints});
  }

  const isUser = await AppDataSource.getRepository(User).findOneBy({
    name: req.body.name,
  })
  
  if(isUser) {
    return res.status(400).json({ error: "User with this name or email alredy exists"});
  }

  else {
    const validUser = await AppDataSource.getRepository(User).create(req.body);
    const results = await (await AppDataSource.getRepository(User).save(validUser));
    return res.status(200).json({ msg: "User created", result: results });;
  }

});
