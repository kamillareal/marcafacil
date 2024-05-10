import { Injectable } from '@nestjs/common';
import { AVAILABLE_RESERVATIONS } from 'src/modules/reservation/application/constants/available-reservations-hours';
import { ReservationRepository } from 'src/modules/reservation/datasource/repository/reservation.repository';

@Injectable()
export class FindAvailableReservations {
  constructor(private reservationRepository: ReservationRepository) {}

  public async execute(laboratory_id: string, day: string) {
    try {
      const allDayReservations = await this.reservationRepository.findByDayAndLabId(laboratory_id, day);

      const availableReservationsFiltered = AVAILABLE_RESERVATIONS.filter((element) => {
        const overlapping = !allDayReservations.some((e) => {
          return e.init_date.getHours() === element.inithour;
        });
        return overlapping;
      });

      return availableReservationsFiltered;
    } catch (error) {
      throw new Error(`message:${error}`);
    }
  }
}
