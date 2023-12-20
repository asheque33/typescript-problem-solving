# Inteview Question

**_Ques-1 :_** _What are some benefits of using TypeScript over JavaScript in a project?_

> **Ans :** _TypeScript offers several benefits over JavaScript, especially in large-scale applications or projects with teams of developers,it is more preferred to use.such as - Type-related errors are caught during development rather than at runtime.Also,TypeScript code tends to be more readable and maintainable due to explicit type footnote and interfaces.As a result, Developers can understand the codebase more easily, leading to improved collaboration and reduced learning curve for new team members._

**_Ques-2 :_** _What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each._

> **Ans :**
>
> - **Optional chaining (?.) :**
>   - _The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist._

> **For example** - _interface User {
> profile?: {
> address?: {
> city?: string;
> }; }; };
> const user: User = { "" };
> // With optional chaining -:
> const cityWithOptionalChaining = user.profile?.address?.city;
> console.log(cityWithOptionalChaining): => undefined_

> - **Nullish coalescing (??) :**
> - _The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand._

> **For example** -
> _const foo = null ?? 'default string';
> console.log(foo);
> // Expected output: "default string"_

**_Ques-3 :_** _How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?._

> **Ans:** _In TypeScript, handling asynchronous operations is commonly done using the async/await syntax, which is built on top of Promises. Here's an overview of how you handle asynchronous operations in TypeScript:_
>
> - **Promise :** > _Promises are a modern approach to handling asynchronous operations in JavaScript and TypeScript. They represent a value that may not be available yet but will be resolved at some point in the future._
> - **Async/Await :** > _Async/Await is a syntax built on top of Promises that provides a more concise and synchronous-looking way of dealing with asynchronous operations. It allows developers to write asynchronous code that resembles synchronous code, making it easier to read and maintain._

> **Advantages of async operations :**
>
> _Async/Await allows developers to write asynchronous code in a more sequential and synchronous style. This improves code readability and makes it easier to understand and maintain, especially for complex asynchronousoperations._

**Ques-4 :** _How can you use TypeScript's enums, and what are their advantages?._

> **Ans :** _TypeScript enums are a way to define a set of named constants. They allow you to create a collection of related values that can be assigned to variables or used as a type. Enums provide a convenient way to work with a fixed set of values in a type-safe manner._

**_Ques-5 :_** _Explain the role of type guards in TypeScript and provide an example of a custom type guard._

> **Ans :** _In TypeScript, type guards are a way to narrow down the type of a variable within a certain block of code. They are particularly useful when dealing with union types or any situation where TypeScript's static type system cannot automatically infer the specific type of a variable. Type guards help you make more specific assertions about the type of a value, allowing you to write safer and more accurate code._

> **For Example -:**
>
> _type NumberOrString = number | string;_
>
> _function handleInput(input: NumberOrString): void {if (typeof input === 'number')_
> {_console.log(`Received a number: ${input}`);}else_
> {_console.log(`Received a string: ${input}`);}}_
> // _Usage: handleInput(5);_  
> // _Outputs: Received a number: 5;_
> // _Usage: handleInput('foo');_
> // _Outputs: Received a string: foo_

**Ques-6 :** _Can you give an example of how to use "readonly" properties in TypeScript?_

**Ans :** _Certainly! In TypeScript, the readonly modifier is used to indicate that a property or an array cannot be modified after it's been created. This helps prevent unintended modifications and enhances the immutability of certain values._

> **For Example -:** > _interface Point {
> readonly x: number;
> readonly y: number;
> }_  
>  _const startPoint: Point = { x: 0, y: 0 };_
>
> // _Error: Cannot assign to 'x' because it is a read-only property._

**Ques-7 :** _Explain what a union type is in TypeScript and provide an example of its usage._

> **Ans :** _A union type describes a value that can be one of several types. We use the vertical bar ( | ) to separate each type, so number | string | boolean is the type of a value that can be a number , a string , or a boolean ._

> **For Example -:** > \*function displayType(value: number | string);
> {if (typeof value === 'number') {console.log('It is a number!');}else{console.log('It is a string!');}}\* > _displayType(42); // Outputs: It is a number!
> displayType("hello"); // Outputs: It is a string!_
