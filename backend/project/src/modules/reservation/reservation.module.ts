import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { ReservationController } from './application/controller/reservation.controller';
import { CreateReservationService } from './core/use-cases/create/create-reservation.service';
import { FindAvailableReservations } from './core/use-cases/find-by-lab-id/find-by-lab-id.service';
import { ReservationRepository } from './datasource/repository/reservation.repository';

@Module({
  imports: [UserModule],
  controllers: [ReservationController],
  providers: [CreateReservationService, ReservationRepository, FindAvailableReservations],
})
export class ReservationModule {}
