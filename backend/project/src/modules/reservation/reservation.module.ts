import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { ReservationController } from './application/controller/reservation.controller';
import { CreateReservationService } from './core/use-cases/create/create-reservation.service';
import { ReservationRepository } from './datasource/repository/reservation.repository';

@Module({
  imports: [UserModule],
  controllers: [ReservationController],
  providers: [CreateReservationService, ReservationRepository],
})
export class ReservationModule {}
