import { DataSource } from "typeorm";
import {
  seedAccountTypes,
  seedDays,
  seedFacilities,
  seedGenders,
  seedGymTypes,
  seedSubscriptionIntevals,
  seedSubscriptionStatuses,
  seedSubscriptions,
} from "./";

export const seedData = async (dataSource: DataSource) => {
  await seedAccountTypes(dataSource);
  await seedDays(dataSource);
  await seedFacilities(dataSource);
  await seedGenders(dataSource);
  await seedGymTypes(dataSource);
  await seedSubscriptionIntevals(dataSource);
  await seedSubscriptionStatuses(dataSource);
  await seedSubscriptions(dataSource);
};
