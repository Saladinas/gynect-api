import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { GenderEnum } from "../enums";

@Entity()
export class Gender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: GenderEnum,
  })
  value: GenderEnum;
}
