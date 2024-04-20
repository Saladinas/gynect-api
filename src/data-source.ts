import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "srv1270.hstgr.io",
  port: 3306,
  username: "u147307222_Gynect",
  password: "Jyfvar-xefri7-fegqid",
  database: "u147307222_Gynect",
  synchronize: true,
  logging: false,
  entities: ["src/entity/*.{ts,js}"],
  migrations: ["src/migration/*.{ts,js}"],
  subscribers: [],
});
