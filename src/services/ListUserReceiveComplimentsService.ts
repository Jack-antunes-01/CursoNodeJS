import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

interface IListUserReceiveComplimentRequest {
  user_id: string;
}

class ListUserReceiveComplimentsService {
  async execute({ user_id }: IListUserReceiveComplimentRequest) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories
    );

    const compliments = complimentsRepositories.find({
      where: {
        user_receiver: user_id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return compliments;
  }
}

export { ListUserReceiveComplimentsService };
