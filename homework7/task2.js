function recurs(num) {
    console.log(num);
    if (num <= 0) return;
    return recurs(num - 1);
}

recurs(5);
