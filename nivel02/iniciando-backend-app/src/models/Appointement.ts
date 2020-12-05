import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from 'typeorm';

import User from './Users';

@Entity('appointments')
class Appointement {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'provider_id'})
    provider: User;

    @Column('time with time zone')
    date: Date;

    /*constructor({provider, date}: Omit <Appointement, 'id'>) {
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }*/

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export default Appointement;
