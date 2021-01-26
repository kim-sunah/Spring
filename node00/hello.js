var result=0;
console.time('duration_sum');
//time=실행시간을 측정하기 위한것

for(var i=1;i<=1000; i++){
    result +=i;
}
console.timeEnd('duration_sum');
console.log('1부터 10000까지 더한 결과물:%d',result);


var person={name:"소녀시대",age:21}
console.dir(person);
var person={name:"소녀시대",age:20}
console.log(person);

console.log([1,2,3]);

console.dir([1,2,3]);
