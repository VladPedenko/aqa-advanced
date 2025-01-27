//function declaration
function rectangle(width, height){
    const sum = width*height;
    return sum;
};
const res = rectangle(5, 10);
console.log(res);

//function expression

const rectangle2 = function (width, height){
    const sum2 = width*height;
    return sum2;
};
const res2 = rectangle2(3, 13);
console.log(res2);

//Arrow function
const rectangle3 = (width, height) => {
    const sum3 = width*height;
    return sum3;
};
const res3 = rectangle2(5, 3);
console.log(res3);