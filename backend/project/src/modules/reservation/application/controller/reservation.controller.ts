import { Body, Controller, Post } from '@nestjs/common';
import { CreateReservationService } from '../../core/use-cases/create/create-reservation.service';

@Controller('reservation')
export class ReservationController {
  constructor(private createReservationService: CreateReservationService) {}

  @Post('create')
  public async create(@Body() data) {
    return await this.createReservationService.execute(data);
  }
}
