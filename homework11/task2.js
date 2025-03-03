const promise1 = new Promise((resolve, reject) =>{
    const response = fetch('https://jsonplaceholder.typicode.com/todos/1');
    if(response){
        resolve(response);
    }
    else reject
  })
 promise1
  .then(response => response.json())
  .then(data => {
    console.log('GET Response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


 const promise2 = new Promise((resolve, reject) =>{
    const response = fetch('https://jsonplaceholder.typicode.com/users/1');
    if(response){
        resolve(response);
    }
    else reject
  });
 promise2
  .then(response => response.json())
  .then(data => {
    console.log('GET Response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  
  const promise3 = Promise.all([promise1, promise2]);
  promise3
  .then(data => {
    console.log('GET Response3:', data);
  })

  const promise4 = Promise.race([promise1, promise2]);
  promise4
  .then(data => {
    console.log('GET Response4:', data);
  })