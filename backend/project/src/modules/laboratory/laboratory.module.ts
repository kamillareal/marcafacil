import { Module } from '@nestjs/common';
import { TestController } from './application/test.controller';
import { CreateLaboratoryService } from './core/use-cases/create/create-laboratory.service';
import { LaboratoryRepository } from './datasource/repository/laboratory.repository';

@Module({
  providers: [CreateLaboratoryService, LaboratoryRepository],
  exports: [CreateLaboratoryService],
  controllers: [TestController],
})
export class LaboratoryModule {}
