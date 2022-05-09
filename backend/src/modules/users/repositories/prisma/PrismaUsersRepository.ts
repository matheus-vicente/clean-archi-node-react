import { User } from "@modules/users/domain/user";
import { prisma } from "@infra/prisma/client";
import { UsersRepository } from "../UsersRepository";

export class PrismaUsersRepository implements UsersRepository {
  async store(user: User): Promise<void> {
    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      nickname: user.nickname,
      last_name: user.last_name,
    };

    await prisma.user.create({ data });
  }

  async findByEmail(email: string): Promise<User> {
    const data = await prisma.user.findUnique({ where: { email } });

    const user = User.create(
      {
        name: data.name,
        email: data.email,
        nickname: data.nickname,
        password: data.password,
        last_name: data.last_name,
      },
      data.id
    );

    return user;
  }
}
