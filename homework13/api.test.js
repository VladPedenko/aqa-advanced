const axios = require('axios')

test("get1", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1', { 
    });
    console.log(response.data);
    expect(response.status).toEqual(200)
    expect(response.data).toEqual({userId: 1, id: 1, title: 'delectus aut autem', completed: false});
})

test("get2", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/3', { 
    });
    console.log(response.data);
    expect(response.status).toEqual(200)
    expect(response.data).toEqual({"userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false});
})

test("get3", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos/23', { 
    });
    console.log(response.data);
    expect(response.status).toEqual(200)
    expect(response.data).toEqual({"albumId": 1,
    "id": 23,
    "title": "harum velit vero totam",
    "url": "https://via.placeholder.com/600/e924e6",
    "thumbnailUrl": "https://via.placeholder.com/150/e924e6"});
})

test("get4", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments/2', { 
    });
    console.log(response.data);
    expect(response.status).toEqual(200)
    expect(response.data).toEqual({
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      });
})

test("get5", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/6', { 
    });
    console.log(response.data);
    expect(response.status).toEqual(200)
    expect(response.data).toEqual({
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
          "street": "Norberto Crossing",
          "suite": "Apt. 950",
          "city": "South Christy",
          "zipcode": "23505-1337",
          "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
          }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
          "name": "Considine-Lockman",
          "catchPhrase": "Synchronised bottom-line interface",
          "bs": "e-enable innovative applications"
        }
      });
})

test("post1", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/8', { 
    });
    console.log(response.data);
    expect(response.status).toEqual(200)
    expect(response.data).toEqual({
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
          "street": "Ellsworth Summit",
          "suite": "Suite 729",
          "city": "Aliyaview",
          "zipcode": "45169",
          "geo": {
            "lat": "-14.3990",
            "lng": "-120.7677"
          }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
          "name": "Abernathy Group",
          "catchPhrase": "Implemented secondary concept",
          "bs": "e-enable extensible e-tailers"
        }
      });
})

test("post2", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos/103', { 
    });
    console.log(response.data);
    expect(response.status).toEqual(200)
    expect(response.data).toEqual({
        "albumId": 3,
        "id": 103,
        "title": "et eius nisi in ut reprehenderit labore eum",
        "url": "https://via.placeholder.com/600/35cedf",
        "thumbnailUrl": "https://via.placeholder.com/150/35cedf"
      });
})

test("post3", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments/22', { 
    });
    console.log(response.data);
    expect(response.status).toEqual(200)
    expect(response.data).toEqual({
        "postId": 5,
        "id": 22,
        "name": "porro repellendus aut tempore quis hic",
        "email": "Khalil@emile.co.uk",
        "body": "qui ipsa animi nostrum praesentium voluptatibus odit\nqui non impedit cum qui nostrum aliquid fuga explicabo\nvoluptatem fugit earum voluptas exercitationem temporibus dignissimos distinctio\nesse inventore reprehenderit quidem ut incidunt nihil necessitatibus rerum"
      });
})

test("post4", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/9', { 
    });
    console.log(response.data);
    expect(response.status).toEqual(200)
    expect(response.data).toEqual({
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
      });
})

test("post5", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums/13', { 
    });
    console.log(response.data);
    expect(response.status).toEqual(200)
    expect(response.data).toEqual({
        "userId": 2,
        "id": 13,
        "title": "ab rerum non rerum consequatur ut ea unde"
      });
})