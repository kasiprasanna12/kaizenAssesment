import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFormat'
})
export class DataFormatPipe implements PipeTransform {

  transform(value:string): unknown {
    return value == 'Egypt' ? 'Testing Apple': value    
  }

}
