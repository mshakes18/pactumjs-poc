const { spec } = require('pactum');

it('should login to the system', async()=>{
  await spec() 
  .post('https://restful-booker.herokuapp.com/auth')
  .expectHeader('content-type', 'application/json; charset=utf-8') 
  .withJson({
"username" : "admin", 
"password" : "password123"
  })
  .expectStatus(200)
  .expectJson("token") 
  .returns('res.headers');
})


it('should not login to the system', async()=>{
  await spec() 
  .post('https://restful-booker.herokuapp.com/auth')
  .expectHeader('content-type', 'application/json; charset=utf-8') 
  .withJson({
"username" : "", 
"password" : ""
  })
  .expectStatus(200)
})


// it('should create a booking', async() => {
//   await spec() 
//   .post('https://restful-booker.herokuapp.com/booking')
//   .withHeaders('Content-Type', 'text/plain charset=utf-8')
//     .withJson({
//     "firstname": "Jim",
//     "lastname": "Brown",
//     "totalprice": 111,
//     "depositpaid": true,
//     "bookingdates": {
//         "checkin": "2023-03-01",
//         "checkout": "2023-03-10"
//     },
//     "additionalneeds": "Breakfast"
// }
// )
//   .expectStatus(200)
//   .expectJsonLike("bookingid")

// })