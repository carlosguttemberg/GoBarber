// import User from '@modules/users/infra/typeorm/entities/User';
import { inject, injectable } from 'tsyringe';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppoitmentsRepository';

interface IRequest {
    provider_id: string;
    month: number;
    day: number;
    year: number;
}

@injectable()
class ListProviderAppointmentsService {
    constructor(
        @inject('AppointmentsRepository')
        private appointmentsRepository: IAppointmentsRepository,
    ) {}

    public async execute({
        provider_id,
        year,
        day,
        month,
    }: IRequest): Promise<Appointment[]> {
        const appointments = await this.appointmentsRepository.findAllInDayFromProvider(
            {
                provider_id,
                day,
                month,
                year,
            },
        );

        return appointments;
    }
}

export default ListProviderAppointmentsService;
