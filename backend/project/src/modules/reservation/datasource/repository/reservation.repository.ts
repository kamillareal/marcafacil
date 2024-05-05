import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class ReservationRepository {
  private prisma = new PrismaClient();

  public async create(data: Prisma.ReservationUncheckedCreateInput) {
    return this.prisma.reservation.create({ data });
  }
}
