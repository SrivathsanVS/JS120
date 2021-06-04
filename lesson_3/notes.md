# Topic 1: Factory Functions

* Create objects based on predefined templates
* Example:
  ```
  function createPerson(firstName, lastName='') {
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: function () {
        return `{this.firstName} ${this.lastName}`;
      }
    };
  }
  ```
* Disadvantages:
  - Huge memory load: all objects created from factory functions contain a copy of the same attributes and methods
  - Lack of traceability: No 'signature' to indicate how an object was created.

* Practice Problems
  - Problem 2:
    ```
    function makeObj() {
      return {
        propA: 18,
        propB: 20
      };
    }
    ```
