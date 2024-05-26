import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { ReservationController } from './application/controller/reservation.controller';
import { CreateReservationService } from './core/use-cases/create/create-reservation.service';
import { DeleteReservationService } from './core/use-cases/delete/delete-reservation.service';
import { FindAllReservationsByUserService } from './core/use-cases/find-all/find-all.service';
import { FindAvailableReservationsService } from './core/use-cases/find-by-lab-id/find-by-lab-id.service';
import { ReservationRepository } from './datasource/repository/reservation.repository';

@Module({
  imports: [UserModule],
  controllers: [ReservationController],
  providers: [CreateReservationService, ReservationRepository, FindAvailableReservationsService, DeleteReservationService, FindAllReservationsByUserService],
})
export class ReservationModule {}
