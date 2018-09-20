import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codePostal'
})
export class CodePostalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value){
    return value.substring(0,2).concat(' ').concat( value.substring(2));;
    }
    return null;
  }

}
