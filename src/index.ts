import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { seedData } from "./data/seedData";
import axios from "axios";
// import { Routes } from "./routes";
// import { User } from "./entity/Gym";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());

    const url = "https://gynect-mvp.bubbleapps.io/version-test/api/1.1/obj/gym";
    const result = await axios.get(url, {
      headers: {
        Authorization: "Bearer c7a721acd6507add763feb1c64d6275e",
      },
    });

    console.log(result);

    // register express routes from defined application routes
    // Routes.forEach((route) => {
    //   (app as any)[route.method](
    //     route.route,
    //     (req: Request, res: Response, next: Function) => {
    //       const result = new (route.controller as any)()[route.action](
    //         req,
    //         res,
    //         next
    //       );
    //       if (result instanceof Promise) {
    //         result.then((result) =>
    //           result !== null && result !== undefined
    //             ? res.send(result)
    //             : undefined
    //         );
    //       } else if (result !== null && result !== undefined) {
    //         res.json(result);
    //       }
    //     }
    //   );
    // });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // await seedData(AppDataSource);

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
