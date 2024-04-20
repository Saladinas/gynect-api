import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AccountTypeEnum } from "../enums";

@Entity()
export class AccountType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: AccountTypeEnum,
  })
  value: AccountTypeEnum;
}
