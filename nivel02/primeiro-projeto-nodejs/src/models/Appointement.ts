import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('appointments')
class Appointement {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider: string;

    @Column('time with time zone')
    date: Date;

    /*constructor({provider, date}: Omit <Appointement, 'id'>) {
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }*/

}

export default Appointement;
