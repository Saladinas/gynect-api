import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { SubscriptionIntervalEnum } from "../enums";

@Entity()
export class SubscriptionInterval {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: SubscriptionIntervalEnum,
  })
  value: SubscriptionIntervalEnum;
}
