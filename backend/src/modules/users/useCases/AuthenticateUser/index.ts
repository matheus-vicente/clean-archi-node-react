import { AuthenticateUser } from "./AuthenticateUser";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";

const repository = new PrismaUsersRepository();
const authenticateUser = new AuthenticateUser(repository);
const authenticateUserController = new AuthenticateUserController(
  authenticateUser
);

export { authenticateUserController };
