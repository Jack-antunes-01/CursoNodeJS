import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

interface IListUserSendComplimentRequest {
  user_id: string;
}

class ListUserSendComplimentsService {
  async execute({ user_id }: IListUserSendComplimentRequest) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories
    );

    const list = complimentsRepositories.find({
      where: {
        user_sender: user_id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return list;
  }
}

export { ListUserSendComplimentsService };
