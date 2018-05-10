const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 5+1;
  timer(seconds);
};

main();
