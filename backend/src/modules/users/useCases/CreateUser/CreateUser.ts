import { User } from "@modules/users/domain/user";
import { UsersRepository } from "@modules/users/repositories/UsersRepository";

type UserRequest = {
  name: string;
  last_name: string;
  nickname: string;
  email: string;
  password: string;
};

export class CreateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(data: UserRequest): Promise<User> {
    const user = User.create(data);

    await this.usersRepository.store(user);

    return user;
  }
}
