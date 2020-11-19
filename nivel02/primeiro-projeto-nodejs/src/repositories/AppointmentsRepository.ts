import Appointment from '../models/Appointement'
import {Entity, EntityRepository, Repository} from 'typeorm'

// conexao : persistencia <--> repositorio <---> Rota
// um repositorio por model
// metodos comuns: find, create...
// responsavel pelas operacoes em banco de dados


@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {

//Promise>>> findByDate(date.then(response =>))
//const resonse = await findByDate(date)
    public async findByDate(date: Date): Promise <Appointment | null> {
       // const findAppointment = this.appointments.find(appointment =>
       //     isEqual(date, appointment.date),
       // );

       const findAppointment = await this.findOne({
           where: {date },
       })
        return findAppointment || null

    }



}

export default AppointmentsRepository;
