import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { SubscriptionStatusEnum } from "../enums";

@Entity()
export class SubscriptionStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: SubscriptionStatusEnum,
  })
  value: SubscriptionStatusEnum;
}
