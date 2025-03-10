import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEjemplo',
  standalone: true,
})

export class FilterEjemploPipe implements PipeTransform {
  transform(value: any[], searchTerm: string): any[] {
    if (!value || !searchTerm) return value;
    return value.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
