import { Body, Get, Post } from '@nestjs/common';

export class UserController {
  constructor(public createUserService: CreateUserService) {}

  @Post()
  public createUser(@Body() body: CreateUserRequestDto): CreateUserResponseDto {
    this.createUserService.execute();
  }
}
