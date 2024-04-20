import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Facility } from "./Facility";

@Entity()
export class Gym {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Facility, (facility) => facility.id)
  @JoinTable()
  facilities: Facility[];
}
