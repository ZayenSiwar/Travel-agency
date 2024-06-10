import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recherche1'
})
export class Recherche1Pipe implements PipeTransform {

  transform(value: any, term: any): any {
    if (term == null) {
      return value;

    } else {
      return value.filter((item: any) => (item.nom.includes(term)));
    }
  }

}
