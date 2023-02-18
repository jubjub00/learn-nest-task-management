import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { map } from 'rxjs';

@Injectable()
export class TransformIntercepter implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler<any>) {
    return next.handle().pipe(map((data) => instanceToPlain(data)));
  }
}
