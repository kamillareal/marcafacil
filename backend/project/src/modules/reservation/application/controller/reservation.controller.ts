import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateReservationService } from '../../core/use-cases/create/create-reservation.service';
import { FindAvailableReservations } from '../../core/use-cases/find-by-lab-id/find-by-lab-id.service';

@Controller('reservation')
export class ReservationController {
  constructor(
    private createReservationService: CreateReservationService,
    private findAvailableReservations: FindAvailableReservations,
  ) {}

  @Post('create')
  public async create(@Body() data) {
    return await this.createReservationService.execute(data);
  }

  @Get('find/:laboratory_id')
  public async findAvailable(@Param('laboratory_id') laboratory_id: string, @Query('day') day: string) {
    return await this.findAvailableReservations.execute(laboratory_id, day);
  }
}
