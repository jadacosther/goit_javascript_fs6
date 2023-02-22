function alert() {
    console.log(this.name + ' is calling');
   }
   
   const name = 'Kingsley';
   alert(); // Kingsley is calling