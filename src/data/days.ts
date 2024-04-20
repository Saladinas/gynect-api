import { DataSource } from "typeorm";
import { Day } from "../entity";
import { DayEnum } from "../enums";

export const seedDays = async (dataSource: DataSource) => {
  const dayRepository = dataSource.getRepository(Day);

  for (const value of Object.values(DayEnum)) {
    const day = {
      value,
    };

    await dayRepository.save(day);
  }
};
