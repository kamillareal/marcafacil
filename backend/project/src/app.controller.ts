import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateLaboratoryRequestDto } from './modules/laboratory/application/dto/request/create-laboratory-request.dto';
import { CreateLaboratoryService } from './modules/laboratory/core/use-cases/create/create-laboratory.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private laboratory: CreateLaboratoryService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/test')
  test(@Body() data: CreateLaboratoryRequestDto) {
    return this.laboratory.execute(data);
  }
}
