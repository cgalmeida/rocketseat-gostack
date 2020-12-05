import User from '../models/Users';
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

interface Request {
    name: string;
    email: string;
    password: string;
}
class CreateUserService {
    public async execute({ name, email, password }: Request): Promise<User> {
        const usersRepository = getRepository(User);

        const chekUserExists = await usersRepository.findOne({
            where: { email },
        });

        if (chekUserExists) {
            throw new Error('Email adress already used.');
        }

        const hashPassword = await hash (password, 8) ;


        const user = usersRepository.create({
            name,
            email,
            password: hashPassword
        });

        await usersRepository.save(user);

        return user;

    }
}

export default CreateUserService;
