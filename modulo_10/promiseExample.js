const makeGreeting = guestName => {
    if (guestName === "" || guestName === undefined) {
      return {
        success: false,
        message: "Guest name must not be empty",
      };
    }
  
    return {
      success: true,
      message: `Welcome ${guestName}`,
    };
  };
  
  const result = makeGreeting("Mango");
  
  if (result.success) {
    console.log(result.message);
  } else {
    console.error(result.message);
  }