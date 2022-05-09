import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUserController";
import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";

const repository = new PrismaUsersRepository();
const createUser = new CreateUser(repository);
const createUserController = new CreateUserController(createUser);

export { createUserController };
