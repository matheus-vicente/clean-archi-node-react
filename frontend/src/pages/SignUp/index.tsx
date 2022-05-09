import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer, ToastContainerProps } from "react-toastify";

import { Button } from "../../components/Button";

import { api } from "../../services/api";

import { Container, Content, ContentRight, ContentLeft } from "./styles";

type SubmitFormData = {
  name: string;
  email: string;
  nickname: string;
  password: string;
  last_name: string;
  password_confirmation: string;
};

type UserRequest = {
  name: string;
  last_name: string;
  nickname: string;
  email: string;
  password: string;
};

const toastProps: ToastContainerProps = {
  autoClose: 3000,
  theme: "colored",
  pauseOnHover: false,
};

export const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleClickSubmit = useCallback(async (data: any) => {
    const {
      name,
      email,
      nickname,
      password,
      last_name,
      password_confirmation,
    }: SubmitFormData = data;

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.toLowerCase().match(regex)) {
      return toast.error("Insira um e-mail válido");
    }

    if (password !== password_confirmation) {
      return toast.error("As senha não coincidem");
    }

    try {
      await api.post("/users", {
        name,
        email,
        nickname,
        password,
        last_name,
        password_confirmation,
      } as UserRequest);

      return navigate("/");
    } catch (error) {
      return toast.error("Erro ao criar usuário. Tente novamente mais tarde");
    }
  }, []);

  return (
    <Container>
      <ToastContainer {...toastProps} />
      <Content>
        <ContentLeft>
          <span>Sinta se em casa!</span>
          <h1>Cadastre-se na plataforma</h1>
        </ContentLeft>
        <ContentRight>
          <form onSubmit={handleSubmit(handleClickSubmit)} noValidate>
            <div className="form-wrapper">
              <div className="form-wrapper-item">
                <label htmlFor="name">Nome</label>
                <input {...register("name")} id="name" type="text" />
              </div>

              <div className="form-wrapper-item">
                <label htmlFor="last_name">Sobrenome</label>
                <input {...register("last_name")} id="last_name" type="text" />
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="nickname">Apelido</label>
              <input {...register("nickname")} id="nickname" type="text" />
            </div>

            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <input {...register("email")} id="email" type="email" />
            </div>

            <div className="form-control">
              <label htmlFor="password">Senha</label>
              <input {...register("password")} id="password" type="password" />
            </div>

            <div className="form-control">
              <label htmlFor="password_confirmation">Confirme sua senha</label>
              <input
                {...register("password_confirmation")}
                id="password_confirmation"
                type="password"
              />
            </div>

            <div className="signup">
              <span>
                Já tem uma conta? <Link to="/">Entre na sua conta agora</Link>
              </span>
            </div>

            <Button type="submit">Criar conta</Button>
          </form>
        </ContentRight>
      </Content>
    </Container>
  );
};
