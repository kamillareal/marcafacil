import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Reservation } from '@prisma/client';
import { getHours, isWeekend } from 'date-fns';
import { CreateReservationRequestDto } from 'src/modules/reservation/application/dto/create/request/create-reservation-request.dto';
import { ReservationRepository } from 'src/modules/reservation/datasource/repository/reservation.repository';
import { FindUserService } from 'src/modules/user/core/use-cases/find/find-user.service';

@Injectable()
export class CreateReservationService {
  constructor(
    private readonly reservationRepository: ReservationRepository,
    private readonly findUserService: FindUserService,
  ) {}

  public async execute(data: CreateReservationRequestDto): Promise<Reservation> {
    try {
      // await this.findUserService.execute({ enrollment: data.user_id });
      const isWeekend = this.isWeekend(data);
      this.isBusinessHours(data);
      return await this.reservationRepository.create(data);
    } catch (error) {
      throw new HttpException(`message:${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //TODO: create a chain of validation

  private isWeekend(data: CreateReservationRequestDto) {
    const { init_date, end_date } = data;
    return isWeekend(init_date) && isWeekend(end_date);
  }

  private isBusinessHours(data: CreateReservationRequestDto) {
    const { init_date, end_date } = data;

    const initHour = getHours(init_date);
    const endHour = getHours(init_date);

    const validInit = initHour >= 8 && initHour <= 21;

    const validEnd = endHour >= 9 && endHour <= 22;
  }
}
