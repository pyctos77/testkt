import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ejemploTrans',
  standalone:true,
})
export class EjemploTransformPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    

    return value.toUpperCase();
  }

}
