import { Router } from 'express';
import {getCustomRepository} from 'typeorm';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointement'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointments'

const appointmentsRouter = Router();


const appointments: Appointment[] = [];

appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();

    return response.json(appointments)
});

appointmentsRouter.post('/', async  (request, response) => {
    try{
        const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const CreateAppointment = new CreateAppointmentService();

    const appointment = await CreateAppointment.execute({date: parsedDate, provider});

    return response.json(appointment);
    }
    catch (err){
        return response.status(400).json({error: err.message});
    }
});

export default appointmentsRouter;
