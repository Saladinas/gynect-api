import { DataSource } from "typeorm";
import { Subscription } from "../entity";
import { SubscriptionEnum } from "../enums";

export const seedSubscriptions = async (dataSource: DataSource) => {
  const subscriptionRepository = dataSource.getRepository(Subscription);

  for (const value of Object.values(SubscriptionEnum)) {
    const subscription = {
      value,
    };

    await subscriptionRepository.save(subscription);
  }
};
