import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codePostal'
})
export class CodePostalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
