import Appointment from '../models/Appointement';
import AppointementRepository from '../repositories/AppointmentsRepository';
import {startOfHour} from 'date-fns'

/*
receb info
trat erro
acesso repo

*/

//DTO
interface Request{
 provider: string;
 date: Date;

}

class CrerateAppointmentService {
    private appointmentsRepository: AppointementRepository;
    
    constructor ( appointmentsRepository: AppointementRepository){
        this.appointmentsRepository = appointmentsRepository;
    }

    public execute({date, provider}: Request):Appointment{
        const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.fiundByDate(appointmentDate);

    if (findAppointmentInSameDate) {
        throw Error('This appointment is already booked');
        //return response
        //    .status(400)
        //    .json({ message: 'This appointment is already booked' });
    }


    const appointment = this.appointmentsRepository.create({provider, date:appointmentDate});
    
    return appointment;
}
}

export default CrerateAppointmentService;