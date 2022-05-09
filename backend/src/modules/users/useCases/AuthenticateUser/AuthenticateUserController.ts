import { Request, Response } from "express";
import { AuthenticateUser } from "./AuthenticateUser";

type AuthenticateUserRequest = {
  email: string;
  password: string;
};

export class AuthenticateUserController {
  constructor(private authenticateUser: AuthenticateUser) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password }: AuthenticateUserRequest = request.body;

    try {
      const token = await this.authenticateUser.execute({ email, password });

      return response.status(200).json({ token });
    } catch (error) {
      return response.status(500).json({ error });
    }
  }
}
