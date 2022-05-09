import { User } from "../domain/user";

export interface UsersRepository {
  store(user: User): Promise<void>;
  findByEmail(email: string): Promise<User>;
}
