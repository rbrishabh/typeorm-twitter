import { getRepository, UsingJoinColumnOnlyOnOneSideAllowedError } from "typeorm"
import { Tweet } from "./entity/Tweet";
import { User } from "./entity/User"


export const Bootstrap = async () => {
    const userRepo = getRepository(User);
    const user = userRepo.create({firstName: 'Rishabh', lastName: 'Budhiraja', age: 23});
    await userRepo.save(user);
    console.log('user saved - Id:', user.id);


    const tweetRepo = getRepository(Tweet);
    const tweet = new Tweet();
    tweet.title = 'New Job!'
    tweet.content = 'Well, finally a new job!'
    tweet.user = Promise.resolve(user);
    await tweetRepo.save(tweet);
    console.log('Saved Tweet!!');

}

export const find = async () => {
    const userRepo = getRepository(User);
    // let user1 = await userRepo.find({where: {firstName: 'Rishabh'}}).catch(console.log)
    // let user2 = await userRepo.findOne({where: {firstName: 'Rishabh'}}).catch(console.log)
    let user3 = await userRepo.findOneOrFail({where: {id: 'b3d4bb09-ee6e-4ea7-a251-768895bb9281'}}).catch(console.log)
    console.log(user3, user3 ? await user3.tweets : '')
}