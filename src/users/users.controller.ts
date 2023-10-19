/* eslint-disable prettier/prettier */
import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { UsersService } from './users.service';

@UseGuards(AuthGuard)
@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
}
