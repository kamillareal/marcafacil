import { Body, Controller, Post } from '@nestjs/common';
import { CreateLaboratoryService } from '../core/use-cases/create/create-laboratory.service';
import { CreateLaboratoryRequestDto } from './dto/request/create-laboratory-request.dto';

@Controller('lab')
export class TestController {
  constructor(private createeLabService: CreateLaboratoryService) {}

  @Post('test')
  public async test(@Body() data: CreateLaboratoryRequestDto) {
    return await this.createeLabService.execute(data);
  }
}
