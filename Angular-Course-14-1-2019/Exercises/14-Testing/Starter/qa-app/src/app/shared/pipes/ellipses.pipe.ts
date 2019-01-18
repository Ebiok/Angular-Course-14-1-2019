import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipses'
})
export class EllipsesPipe implements PipeTransform {

  transform(value: any, length?: any): any {
      if (typeof value !== "string" || !length) { console.log('returning'); return value }
      
      return value.substr(0,+length) + " . . . "
  }

}
