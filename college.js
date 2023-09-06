let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
function sumOfDivisors(n){
  //Code here
  if(n==1){
    return 1
}

else{
    let mult=1;
    for(i=2;i<=n;i++){
        if(n % i == 0){
      mult=mult+i
    }
    }
    return mult

}
}
    

let n = parseInt(readLine());
console.log(sumOfDivisors(n));