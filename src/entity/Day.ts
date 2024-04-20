import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { DayEnum } from "../enums";

@Entity()
export class Day {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: DayEnum,
  })
  value: DayEnum;
}
