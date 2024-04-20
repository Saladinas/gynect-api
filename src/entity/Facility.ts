import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { FacilityEnum } from "../enums";

@Entity()
export class Facility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: FacilityEnum,
  })
  value: FacilityEnum;
}
