import svg4everybody from 'svg4everybody';
import SayHello from './components/sayhello';

svg4everybody();

class App extends SayHello {
  constructor() {
    super();
  }
}

new App;
