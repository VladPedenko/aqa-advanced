async function promise1() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
  };

promise1().then(console.log);

async function promise2() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    return data;
  };

promise2().then(console.log);

const promise3 = Promise.all([promise1(), promise2()]);
  promise3
  .then(data => {
    console.log('GET Response3:', data);
  })

  const promise4 = Promise.race([promise1(), promise2()]);
  promise4
  .then(data => {
    console.log('GET Response4:', data);
  })