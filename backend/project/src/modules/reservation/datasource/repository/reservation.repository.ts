import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, Reservation } from '@prisma/client';
import { addHours } from 'date-fns';

@Injectable()
export class ReservationRepository {
  private prisma = new PrismaClient();

  public async create(data: Prisma.ReservationUncheckedCreateInput) {
    return this.prisma.reservation.create({ data });
  }

  public async findByDayAndLabId(laboratory_id: string, day: string) {
    const dayEnd = addHours(day, 23.999).toISOString();
    return this.prisma.reservation.findMany({
      where: {
        laboratory_id,
        AND: [{ init_date: { gte: day }, end_date: { lt: dayEnd } }],
      },
      orderBy: { init_date: 'asc' },
    });
  }

  public async findByLabIdAndInitDate(laboratory_id: string, init_date: Date): Promise<Reservation> {
    return await this.prisma.reservation.findFirst({ where: { AND: [{ laboratory_id }, { init_date }] } });
  }
}

const findByLabIdAndInitDate = Prisma.validator<Prisma.ReservationDefaultArgs>()({
  select: {},
});

export type FinanceWithPerson = Prisma.ReservationGetPayload<typeof findByLabIdAndInitDate>;
