const ftoc = function(temp) {
  if(typeof temp === 'number'){
    temp = (5 / 9) * (temp - 32);

    if(Number.isInteger(temp)) return temp;
    else return Number(temp.toFixed(1));
  }
  else return 'ERROR';
};

const ctof = function(temp) {
  if(typeof temp === 'number'){
    temp = (9/ 5) * temp + 32;

    if(Number.isInteger(temp)) return temp;
    else return Number(temp.toFixed(1));
  }
  else return 'ERROR';
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
