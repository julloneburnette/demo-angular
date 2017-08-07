import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
transform(value, term: string) {
  return value.filter((item) => {
    item.title.startsWith(term);
  });
}
}
