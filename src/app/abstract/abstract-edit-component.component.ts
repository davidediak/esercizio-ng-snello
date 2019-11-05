import {AbstractServiceService} from '../services/abstract-service.service';

export class AbstractEditComponent<T> {
  element: T;

  constructor(public service: AbstractServiceService<T>) { }

  get(id: string) {
    this.service
    .get(id)
    .subscribe( element => this.element = element);
  }

  delete(id: string) {
    this.service
    .delete(id)
    .subscribe();
  }

  post(element: T) {
    this.service
    .post(element)
    .subscribe();
  }
  
  put(id: string, element: T) {
    this.service
    .put(id, element)
    .subscribe();
  }

  goBack() {
    window.history.back();
  }
  
}
