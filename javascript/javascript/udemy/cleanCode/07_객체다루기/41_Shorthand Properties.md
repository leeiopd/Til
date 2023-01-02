# Udemy - CleanCode

### 7. 객체 다루기

##### 41_Shorthand Properties

* css

  ```css
  .before{
      background-color:  #000;
      background-image: url();
      background-repeat: no-repeat;
      background-position: left top;
  
      margin-top: 10px;
      margin-right: 5px;
      margin-bottom: 10px;
      margin-left: 5px;
  }
  
  .after{
      background: #000 url() no-repeat left top;
      margin: 10px 5px 10px 5px
  }
  ```



* javascript

  ```javascript
  /**
   * Shorthand Properties
   * Concise Method
   */
  
  const counterApp = combineReducers({ counter, extra, etc1, etc2 });
  
  const firstName = "poco";
  const lastName = "jang";
  
  const person = {
    firstName: "poco",
    lastName: "jang",
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
  
  const person2 = {
    // Shorthand Properties
    firstName,
    lastName,
    getFullName() {
      // Concise Method
      return this.firstName + " " + this.lastName;
    },
  };
  
  ```





* Shorthand Properties 와 Concise Method 를 사용하면 Object 의 key / value 를 각각 작성해야 하는 수고를 덜어준다.
  * ES2015+
