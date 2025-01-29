function handleNum (a, handleEven, handleOdd) {
    if (a % 2 == 0) {
        handleEven();
    }
    if (a % 2 !== 0) {
        handleOdd();
    }
}

function handleEven(){
    console.log('number is even');
}

function handleOdd() {
    console.log('number is odd');
}


handleNum(9, handleEven, handleOdd);