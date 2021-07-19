import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  //espaço
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const createUserSevice = new CreateUserService();

    const user = await createUserSevice.execute({ name, email, admin });

    return response.json(user);
  }
}

export { CreateUserController };
