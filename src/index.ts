import "reflect-metadata";
import {createConnection} from "typeorm";
import { Bootstrap, find } from "./bootstrap";
import { User } from "./entity/User";
// import {User} from "./entity/User";

createConnection().then(async connection => {

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(User, user);
    // console.log("Saved a new user with id: " + user.id);

   

    // await Bootstrap().catch(err=>console.log(err))
    await find().catch(err=>console.log(err))
    //  console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);


}).catch(error => console.log(error));
