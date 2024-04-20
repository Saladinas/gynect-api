import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { GymTypeEnum } from "../enums";

@Entity()
export class GymType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: GymTypeEnum,
  })
  value: GymTypeEnum;
}
