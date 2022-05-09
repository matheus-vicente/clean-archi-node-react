import { UsersRepository } from "@modules/users/repositories/UsersRepository";

type AuthenticateUserRequest = {
  email: string;
  password: string;
};

// type AuthenticateUserReponse = {
//   token: boolean;
// };

export class AuthenticateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUserRequest): Promise<boolean> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Combinacao usuario senha incorreta");
    }

    if (password !== user.password) {
      throw new Error("Combinacao usuario senha incorreta");
    }

    return true;
  }
}
