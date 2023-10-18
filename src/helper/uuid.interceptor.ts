/* eslint-disable prettier/prettier */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  HttpException,
  HttpStatus,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UuidInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const id = request.params.id;
    const isUuid = this.isValidUuid(id);

    if (!isUuid) {
      throw new HttpException('Invalid UUID', HttpStatus.BAD_REQUEST);
    }

    return next.handle();
  }

  private isValidUuid(id: string): boolean {
    return /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[4|5][a-fA-F0-9]{3}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/.test(
      id,
    );
  }
}
