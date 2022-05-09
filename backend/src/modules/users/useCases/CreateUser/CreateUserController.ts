import { Request, Response } from "express";
import { CreateUser } from "./CreateUser";

type UserRequest = {
  name: string;
  last_name: string;
  nickname: string;
  email: string;
  password: string;
};

type UserReponse = {
  id: string;
  name: string;
  email: string;
  nickname: string;
};

export class CreateUserController {
  constructor(private createUser: CreateUser) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const reqUser = request.body as UserRequest;

      const user = await this.createUser.execute(reqUser);

      const userReponse: UserReponse = {
        id: user.id,
        name: user.name,
        email: user.email,
        nickname: user.nickname,
      };

      return response.status(201).json({ user: userReponse });
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
}
