import { Pipe, PipeTransform } from '@angular/core';

const HTTP_URL_SUFIX = ['http://', 'https://'];

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {

  transform(link: string, ...args: any[]): any {
    let transformedValue: string = link;

    for (const sufix of HTTP_URL_SUFIX) {
      if (link.includes(sufix)) {
        transformedValue = link.replace(sufix, '');
        break;
      }
    }

    return transformedValue;
  }

}
