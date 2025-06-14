import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('entrar')
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto) {
    const token = await this.authService.validarUsuario(
      loginDto.email,
      loginDto.senha,
    );
    return { 
      sucesso: true,
      mensagem: 'Login realizado com sucesso',
      token 
    };
  }
}
