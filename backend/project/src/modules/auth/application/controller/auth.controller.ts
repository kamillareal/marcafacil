import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../../auth.service';
import { signInRequestDto } from '../dto/sign-in-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/user-signIn')
  @HttpCode(HttpStatus.OK)
  public async signIn(@Body() data: signInRequestDto) {
    return await this.authService.signIn(data);
  }
}
