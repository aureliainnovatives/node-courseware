function callbydelay(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Delay of ${delay} is completed`);
    }, delay);
  });
}

function calldelay(delay) {
  callbydelay(delay).then((v) => {
    console.log("Delay for " + delay + " is received->" + v);

    callbydelay(delay * 1.5).then((v) => {
      console.log("Delay for " + delay * 1.5 + " is received->" + v);
    });
  });
}

console.log("Initiate");
//calldelay(2000);

async function callbydelayasync(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Delay of ${delay} is completed`);
    }, delay);
  });
}

async function calldelayasync(delay) {
  var result = await callbydelay(delay);
  console.log("RESULT1:" + result);
  result = await callbydelay(delay);
  console.log("RESULT2" + result);

  result = await callbydelay(delay);
  console.log("RESULT3" + result);
}

calldelayasync(2000);
