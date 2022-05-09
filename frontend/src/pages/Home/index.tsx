import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer, ToastContainerProps } from "react-toastify";

import { Button } from "../../components/Button";

import { Container, Content, ContentRight, ContentLeft } from "./styles";
import { api } from "../../services/api";

type FormSubmitData = {
  email: string;
  password: string;
};

const toastProps: ToastContainerProps = {
  autoClose: 3000,
  theme: "colored",
  pauseOnHover: false,
};

export const Home: React.FC = () => {
  const { handleSubmit, register } = useForm();

  const handleClickSubmit = useCallback(async (data: any) => {
    const { email, password } = data as FormSubmitData;

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.toLowerCase().match(regex)) {
      return toast.error("Insira um e-mail válido");
    }

    try {
      const response = await api.post("auth", { email, password });

      console.log(response.data);

      return toast.info("Entrou");
    } catch (error) {
      return toast.error("Erro ao entrar. Tente novamente mais tarde");
    }
  }, []);

  return (
    <Container>
      <ToastContainer {...toastProps} />

      <Content>
        <ContentLeft>
          <span>Bem vindo de volta!</span>
          <h1>Faça login na plataforma</h1>
        </ContentLeft>
        <ContentRight>
          <form onSubmit={handleSubmit(handleClickSubmit)} noValidate>
            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <input {...register("email")} id="email" type="email" />
            </div>

            <div className="form-control">
              <label htmlFor="password">Senha</label>
              <input {...register("password")} id="password" type="password" />
            </div>

            <div className="signup">
              <span>
                Ainda não tem uma conta?{" "}
                <Link to="/criar-conta">Crie uma conta agora</Link>
              </span>
            </div>

            <Button type="submit">Entrar</Button>
          </form>
        </ContentRight>
      </Content>
    </Container>
  );
};
