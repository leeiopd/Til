/**
 * Closure
 */

function log(type, value) {
  if (type === "log") {
    console.log(value);
  }
  if (type === "info") {
    console.info(value);
  }
  if (type === "error") {
    console.error(value);
  }
  if (type === "warn") {
    console.warn(value);
  }
}

log("log", "foo");
log("info", "foo");
log("error", "foo");
log("warn", "foo");

////////////////////
// closure 사용 개선
function closureLog(value) {
  return function (fn) {
    fn(value);
  };
}

const logFoo = closureLog("foo");
logFoo((v) => console.log(v));
logFoo((v) => console.info(v));
logFoo((v) => console.error(v));
logFoo((v) => console.warn(v));
