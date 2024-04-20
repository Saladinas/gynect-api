import { DataSource } from "typeorm";
import { SubscriptionStatus } from "../entity";
import { SubscriptionStatusEnum } from "../enums";

export const seedSubscriptionStatuses = async (dataSource: DataSource) => {
  const subscriptionStatusRepository =
    dataSource.getRepository(SubscriptionStatus);

  for (const value of Object.values(SubscriptionStatusEnum)) {
    const subscriptionStatus = {
      value,
    };

    await subscriptionStatusRepository.save(subscriptionStatus);
  }
};
