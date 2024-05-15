import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateReservationService } from '../../core/use-cases/create/create-reservation.service';
import { DeleteReservationService } from '../../core/use-cases/delete/delete-reservation.service';
import { FindAvailableReservationsService } from '../../core/use-cases/find-by-lab-id/find-by-lab-id.service';

@Controller('reservation')
export class ReservationController {
  constructor(
    private createReservationService: CreateReservationService,
    private findAvailableReservations: FindAvailableReservationsService,
    private deleteReservationService: DeleteReservationService,
  ) {}

  @Post('create')
  public async create(@Body() data) {
    return await this.createReservationService.execute(data);
  }

  @Get('find/:laboratory_id')
  public async findAvailable(@Param('laboratory_id') laboratory_id: string, @Query('day') day: string) {
    return await this.findAvailableReservations.execute(laboratory_id, day);
  }

  @Delete('delete/:reservation_id')
  public async delete(@Param('reservation_id') reservationId: string) {
    return this.deleteReservationService.execute(reservationId);
  }
}
