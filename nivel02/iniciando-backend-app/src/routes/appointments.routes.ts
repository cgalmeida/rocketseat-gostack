import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointement'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointments'

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);


const appointments: Appointment[] = [];

appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();

    return response.json(appointments)
});

appointmentsRouter.post('/', async (request, response) => {

    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    const CreateAppointment = new CreateAppointmentService();

    const appointment = await CreateAppointment.execute({
        date: parsedDate,
        provider_id
    });

    return response.json(appointment);
});

export default appointmentsRouter;
