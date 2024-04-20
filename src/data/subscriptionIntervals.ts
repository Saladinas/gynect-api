import { DataSource } from "typeorm";
import { SubscriptionInterval } from "../entity";
import { SubscriptionIntervalEnum } from "../enums";

export const seedSubscriptionIntevals = async (dataSource: DataSource) => {
  const subscriptionIntevalRepository =
    dataSource.getRepository(SubscriptionInterval);

  for (const value of Object.values(SubscriptionIntervalEnum)) {
    const subscriptionInteval = {
      value,
    };

    await subscriptionIntevalRepository.save(subscriptionInteval);
  }
};
