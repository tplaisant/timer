let alarms = [];

alarms = process.argv.slice(2);

function isNumeric(num){
  return !isNaN(num)
}

if (alarms.length > 0) {
  for(let time of alarms) {
    if (time > 0 && isNumeric(time)) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, time + '000');
    }
  };
}