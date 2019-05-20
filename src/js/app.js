import svg4everybody from 'svg4everybody';
import SayHello from './components/sayhello';

svg4everybody();

class App extends SayHello {
  constructor() {
    super();
    // this.init();
  }
  // init() {
  //   const data = await this.getAll();
  //   console.log(data)
  //   this.getAll().then(data => console.log(data))
  // }
  // getAll() {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve('hello world')
  //     }, 100);
  //   })
  // }
}

new App;
