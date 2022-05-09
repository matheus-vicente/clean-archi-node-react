import { Entity } from "@core/domain/Entity";

type UserProps = {
  name: string;
  last_name: string;
  nickname: string;
  email: string;
  password: string;
};

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: string) {
    super(props, id);
  }

  static create(data: UserProps, id?: string): User {
    const user = new User(data, id);

    return user;
  }

  get name(): string {
    return this.props.name;
  }

  get last_name(): string {
    return this.props.last_name;
  }

  get nickname(): string {
    return this.props.nickname;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }
}
