import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
   if ( value.length === 0 || value.length === null) {
     return value;
   }

    const resultsArray  = [];
   for (const item  of value) {
     if (item[propName].startsWith(filterString)) {
       resultsArray.push(item);
     }

   }
return resultsArray;

  }

}
