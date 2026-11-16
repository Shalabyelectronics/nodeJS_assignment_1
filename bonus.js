// Bonus (2 Grades): LeetCode "Counter II"
// Paste the exact code you submitted (and had accepted) on LeetCode below.

var createCounter = function (init) {
  const ORGINALVALUE = init;
  return {
    value: init,
    increment: function () {
      return ++this.value;
    },
    decrement: function () {
      return --this.value;
    },
    reset: function () {
      return (this.value = ORGINALVALUE);
    },
  };
};

// const c = createCounter(5);
// console.log(c.reset());
// c.increment();
// c.increment();
// c.decrement();
// c.reset();
// console.log(c.value);

// https://leetcode.com/problems/counter-ii/submissions/2197068717
