import { Router } from "express";

import { createUserController } from "@modules/users/useCases/CreateUser";

const usersRoutes = Router();

usersRoutes.post("/", async (req, res) =>
  createUserController.handle(req, res)
);

export { usersRoutes };
