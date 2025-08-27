import { Component } from '@angular/core';

@Component({
  selector: 'app-injector',
  imports: [],
  templateUrl: './Injector.html',
  styleUrl: './Injector.css'
})
export class Injector {
  private _container = new Map();

  get(service: unknown){
    const serviceInstance = this._container.get(service);
    if(!serviceInstance){
      throw new Error('Service not found');
    }
    return serviceInstance;
  }
}

