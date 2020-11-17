import Appointment from '../models/Appointement'
import { isEqual } from 'date-fns';

// conexao : persistencia <--> repositorio <---> Rota
// um repositorio por model 
// metodos comuns: find, create...
// responsavel pelas operacoes em banco de dados


interface CreateAppointmentDTO {

    provider: string;
     date: Date;
}

class AppointementRepository {
    private appointments: Appointment[] = [];

    constructor() {
        this.appointments = [];
    }
 public all(): Appointment []{
     return this.appointments;

 }
    public fiundByDate(date: Date): Appointment | null {
        const findAppointment = this.appointments.find(appointment =>
            isEqual(date, appointment.date),
        );
        return findAppointment || null

    }
    //provider: string, date: Date
    public create({provider,date}: CreateAppointmentDTO): Appointment {
        const appointment = new Appointment({provider, date});
    
        this.appointments.push(appointment);
    
        return appointment;
      }


}

export default AppointementRepository;