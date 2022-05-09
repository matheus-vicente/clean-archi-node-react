import { Router } from "express";

import { authenticateUserController } from "@modules/users/useCases/AuthenticateUser";

const authRoutes = Router();

authRoutes.post("/", async (req, res) =>
  authenticateUserController.handle(req, res)
);

export { authRoutes };
