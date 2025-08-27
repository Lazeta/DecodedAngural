// "Angular" DI
class UserService {
  sayHi(){
    console.log('Hi!');
  }
}

class Component {
  constructor(public user: UserService){}
}

export class Injector {
  private _container = new Map();

  constructor(private _providers: any[] = []) {
    this._providers.forEach(service => this._container.set(service, new service()))
  }

  get(service: any){
    const serviceInstance = this._container.get(service);
    if(!serviceInstance){
      throw new Error('Service not found');
    }
    return serviceInstance;
  }
}

const injector = new Injector([UserService])
const component = new Component(injector.get(UserService))
component.user.sayHi();