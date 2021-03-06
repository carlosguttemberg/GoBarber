// import User from '@modules/users/infra/typeorm/entities/User';
import { inject, injectable } from 'tsyringe';
import { getHours, isAfter } from 'date-fns';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppoitmentsRepository';

interface IRequest {
    provider_id: string;
    month: number;
    year: number;
    day: number;
}

type IResponse = Array<{
    hour: number;
    available: boolean;
}>;

@injectable()
class ListProviderDayAvailabilityService {
    constructor(
        @inject('AppointmentsRepository')
        private appointmentsRepository: IAppointmentsRepository,
    ) {}

    public async execute({
        provider_id,
        year,
        month,
        day,
    }: IRequest): Promise<IResponse> {
        const appointments = await this.appointmentsRepository.findAllInDayFromProvider(
            {
                day,
                month,
                provider_id,
                year,
            },
        );

        const hourStart = 8;
        const eachHourArray = Array.from(
            { length: 10 },
            (value, index) => index + hourStart,
        );

        const currentDate = new Date(Date.now());

        const availability = eachHourArray.map(hour => {
            const hasAppointmentInHour = appointments.find(
                appointment => getHours(appointment.date) === hour,
            );

            const compareDate = new Date(year, month - 1, day, hour);

            return {
                hour,
                available:
                    !hasAppointmentInHour && isAfter(compareDate, currentDate),
            };
        });

        return availability;
    }
}

export default ListProviderDayAvailabilityService;
