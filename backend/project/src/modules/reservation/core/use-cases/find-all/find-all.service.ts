import { BadRequestException, Injectable } from '@nestjs/common';
import { ReservationRepository } from 'src/modules/reservation/datasource/repository/reservation.repository';

@Injectable()
export class FindAllReservationsByUserService {
  constructor(private reservationsRepository: ReservationRepository) {}

  async execute(userId: string, initDate: string, endDate: string) {
    try {
      return await this.reservationsRepository.findAllByDateRange(userId, initDate, endDate);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
