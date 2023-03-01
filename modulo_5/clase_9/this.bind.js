function greet(clientName) {
    console.log(`${clientName}, bienvenidos a «${this.service}».`);
  }
  
  const steam = {
    service: "Steam",
  };

  const steamGreeter = greet.bind(steam);
  steamGreeter("Mango"); // "Mango, bienvenido a  «Steam»."
  
  const gmail = {
    service: "Gmail",
  };
  const gmailGreeter = greet.bind(gmail);
  gmailGreeter("Poly"); // "Poly, bienvenida a «Gmail»."