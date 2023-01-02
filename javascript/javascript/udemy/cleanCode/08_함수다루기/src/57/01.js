/**
 * arrow function
 */

const user = {
  name: "Poco",
  getName: () => {
    // arrow function은 user object
    // name 을 찾지 못함
    return this.name;
  },
  newFriends: () => {
    // arrow function은
    // call, apply, bind 사용불가
    const newFriendList = Array.from(arguments);

    return this.name + newFriendList;
  },
};

user.getName(); // undefined
console.log(user.newFriends()); // undefined[object Object],function require(path) { return mod.require(path); },[object Object],...filePath
