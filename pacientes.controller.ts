import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CriarPacienteDto } from './dto/criar-paciente.dto';

@Controller('api/pacientes')
export class PacientesController {
  constructor(private pacientesService: PacientesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async criar(@Body() pacienteDto: CriarPacienteDto) {
    const paciente = await this.pacientesService.criar(pacienteDto);
    return {
      sucesso: true,
      dados: paciente,
    };
  }
}
