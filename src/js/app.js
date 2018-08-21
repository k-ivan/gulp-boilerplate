import svg4everybody from 'svg4everybody';
import SayHello from './sayhello';

svg4everybody();

class App extends SayHello {
  constructor() {
    super();
  }
}

new App;
