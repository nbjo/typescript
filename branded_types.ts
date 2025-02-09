declare const __brand: unique symbol;

type Branded<T, Brand> = T & { [__brand]: Brand };

const email: string = "hi@youtube.com";

type Email = Branded<string, "Email">;

function sendEmail(address: Email, text: string) {
  console.log(`send email to ${address} with text ${text}`);
}

function isValidEmail(input: string): input is Email {
  return input.includes("@");
}

function assertValidEmail(input: string): asserts input is Email {
  if (!input.includes("@")) {
    throw new Error(`${input} is no email`);
  }
}

function strange(typeOfEmail: Email) {
  console.log("typeOfEmail = " + typeOfEmail);
}

const anEmailString: string = "xxx@yyy.com";
const isValid = isValidEmail(anEmailString);
assertValidEmail(anEmailString);
assertValidEmail(email);
// ^?
sendEmail(email, "our text");

const newEmail: string = "totally@not an email";
strange(anEmailString);
strange(email);
// const typeOfEmail : Email = anEmailString;
assertValidEmail(newEmail); // This line of code insure, that the followng line will not fail!
sendEmail(newEmail, "asdf");

