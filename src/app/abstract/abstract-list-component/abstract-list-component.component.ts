import {AbstractServiceService} from '../../services/abstract-service.service';

export class AbstractListComponent<T> {
  elements: T[] = [];

  constructor(public service: AbstractServiceService<T>) { }

  getList() {
    this.service
    .getList()
    .subscribe(elements => {
      console.log(elements);
      return (this.elements = <T []>elements)});
  }
}
