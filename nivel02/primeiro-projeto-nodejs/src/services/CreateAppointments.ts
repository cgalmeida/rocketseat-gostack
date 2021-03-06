import Appointment from '../models/Appointement';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import {startOfHour} from 'date-fns'
import {getCustomRepository} from 'typeorm'

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
   public async execute({date, provider}: Request): Promise<Appointment>{
       const appointmentsRepository = getCustomRepository(AppointmentsRepository);
        const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate);

    if (findAppointmentInSameDate) {
        throw Error('This appointment is already booked');
        //return response
        //    .status(400)
        //    .json({ message: 'This appointment is already booked' });
    }


    // cria a instancia mas nao salva em BD
    const appointment = appointmentsRepository.create({provider, date:appointmentDate});

    //salva em BD
    await appointmentsRepository.save(appointment);

    return appointment;
}
}

export default CrerateAppointmentService;
