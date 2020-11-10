import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request:Request, response: Response){
    const user = createUser({
        email:'asdada@.com',
        password: '213456',
        techs: [
            'Nodes.js',
            'ReactJS',
            'React Native'
        ],
    })

    console.log(user.email);
    return response.json({message: 'HelloWorld'});
}