import { DataSource } from "typeorm";
import { GymType } from "../entity";
import { GymTypeEnum } from "../enums";

export const seedGymTypes = async (dataSource: DataSource) => {
  const gymTypeRepository = dataSource.getRepository(GymType);

  for (const value of Object.values(GymTypeEnum)) {
    const gymType = {
      value,
    };

    await gymTypeRepository.save(gymType);
  }
};
