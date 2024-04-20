import { DataSource } from "typeorm";
import { Gender } from "../entity";
import { GenderEnum } from "../enums";

export const seedGenders = async (dataSource: DataSource) => {
  const genderRepository = dataSource.getRepository(Gender);

  for (const value of Object.values(GenderEnum)) {
    const gender = {
      value,
    };

    await genderRepository.save(gender);
  }
};
