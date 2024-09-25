import { PipeTransform } from '@nestjs/common';
import { parse, sub } from 'date-fns';

export class ParseDatePipe implements PipeTransform {
  transform(value: string | boolean) {
    if (value === undefined || value === false || value === 'false') {
      return undefined;
    }

    return sub(parse(String(value), "yyyy-MM-dd'T'HH:mm", new Date()), {
      hours: 3,
    });
  }
}
