/**
 * Object Freeze
 */

const STATUS = Object.freeze({
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  OPTIONS: {
    GREEN: "GREEN",
    RED: "RED",
  },
});

STATUS.PENDING = "P2";

console.log(STATUS.PENDING);

console.log(Object.isFrozen(STATUS.FAIL));

console.log(Object.isFrozen(STATUS.OPTIONS));

STATUS.OPTIONS.GREEN = "G";
STATUS.OPTIONS.YELLOW = "Y";

console.log(STATUS.OPTIONS);
