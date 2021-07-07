import { IUsers } from 'src/app/shared/interface/userdatas';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: IUsers[], filterTerm: string): unknown {
    // tslint:disable-next-line: max-line-length
    return arr.filter((user: IUsers) => user.name.includes(filterTerm)).length ? arr.filter((data: IUsers) => data.name.includes(filterTerm)) : [{
      name: 'not found'
    }];
  }

}
