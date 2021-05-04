import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tilecase'
})
export class TilecasePipe implements PipeTransform {

  transform(txt: string, ...args: string[]): string {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  }

}
