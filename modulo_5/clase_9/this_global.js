function alert() {
    console.log(this.name + ' is calling');
   }
   
const name = 'Kingsley';
alert(); // undefined is calling