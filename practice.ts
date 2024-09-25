function reverseString(str: string): void {
  str += " ";
  let string: string = "";
  let newStr: string = "";
  for (let i:number = 0; i < str.length; i++) {
    if (str[i] != " ") {
      string += str[i];
    } else {
      string += " ";
      for (let j:number = string.length - 1; j >= 0; j--) {
        newStr += string[j];
        //    console.log(string[j])
      }
      string = "";
    }
  }
  console.log(newStr);
}
reverseString("hi silver");
