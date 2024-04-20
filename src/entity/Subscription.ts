import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { SubscriptionEnum } from "../enums";

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: SubscriptionEnum,
  })
  value: SubscriptionEnum;
}
