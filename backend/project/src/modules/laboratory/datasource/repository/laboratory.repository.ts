import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class LaboratoryRepository {
  private prisma = new PrismaClient();

  public create(data: Prisma.LaboratoryCreateInput) {
    return this.prisma.laboratory.create({
      data,
    });
  }
}
