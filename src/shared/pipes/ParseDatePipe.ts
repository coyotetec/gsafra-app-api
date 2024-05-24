import { PipeTransform } from '@nestjs/common';
import { parse, sub } from 'date-fns';

export class ParseDatePipe implements PipeTransform {
  transform(value: string) {
    if (value === undefined) {
      return undefined;
    }

    return sub(parse(value, "yyyy-MM-dd'T'HH:mm", new Date()), { hours: 3 });
  }
}
