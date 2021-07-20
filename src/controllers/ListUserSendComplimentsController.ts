import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const sendedComplimentsService = new ListUserSendComplimentsService();

    const sendedCompliments = await sendedComplimentsService.execute({
      user_id,
    });

    return response.json(sendedCompliments);
  }
}

export { ListUserSendComplimentsController };
