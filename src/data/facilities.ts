import { DataSource } from "typeorm";
import { Facility } from "../entity";
import { FacilityEnum } from "../enums";

export const seedFacilities = async (dataSource: DataSource) => {
  const facilityRepository = dataSource.getRepository(Facility);

  for (const value of Object.values(FacilityEnum)) {
    const facility = {
      value,
    };

    await facilityRepository.save(facility);
  }
};
