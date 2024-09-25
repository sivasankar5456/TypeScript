// 15 enums

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resources<T> {
    uid: number;
    resourceName: ResourceType;
    data: T;
  }
  
  const documentOne: Resources<object> = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: { name: "silver" },
  };
  const documentTwo: Resources<string[]> = {
    uid: 2,
    resourceName: ResourceType.PERSON,
    data: ["silver","krishna"],
  };
  const documentThree: Resources<boolean> = {
    uid: 3,
    resourceName: ResourceType.FILM,
    data: false,
  };
  
  console.log(documentOne,documentTwo,documentThree)



  // // Numeric Enums - Fully Initialized
  // // You can assign unique number values for each enum value. Then the values will not incremented automatically:

  // // Example
  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);



  // // String Enums
  // // Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
  
  // // Example
  enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  // logs "North"
  console.log(CardinalDirections.North);
  // logs "West"
  console.log(CardinalDirections.West);
  





  