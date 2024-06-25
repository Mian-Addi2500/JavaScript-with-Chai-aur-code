// for

//basic for loop
for (let i = 0; i <= 10; i++) {
  const element = i;
  //console.log(element);
}

//basic for loop with condition

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    //console.log("5 is best number");
  }
  //console.log(element);
}
// console.log(element);

//nested for loop

for (let i = 1; i <= 10; i++) {
  //console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
  }
}

// for loop on array

let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

// keywords in loops

// break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    break; // jesy break aye ga loop ki itration end ho jy gi or 5 b ni print krye ga
  }
  console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue; // is mn aik br maf kr dy ga  or loop ko jri rkhy ga bs 5 ko sirf ni print krwe ga
  }
  console.log(`Value of i is ${index}`);
}
