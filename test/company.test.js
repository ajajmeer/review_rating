// let server = require("../index");
// let chaiHttp = require("chai-http");
// var chai = require("chai");
// const request = require('supertest');
// const companySchema = require("../models/companySchema");
// const companyRoutes = require("../routes/companyRoutes");

// chai.should();
// chai.use(chaiHttp);

// describe("Test API", () => {
//   describe("POST /api/company", () => {
//     // it("It should create new company :", (done) => {
//     //   const data = {
//     //     companyName: "Abhimka Softitude",
//     //     companyLocation: "Vijay Nagar",
//     //     companyCity: "Indore",
//     //   };
//     //   chai
//     //     .request(server)
//     //     .post("/company/create")
//     //     .set("Content-Type", "application/x-www-form-urlencoded")
//     //     .field(data)
//     //     .attach("companyPic", "C:\Users\PULKIT\OneDrive\Pictures\ankit.jpg")
//     //     .end((err, res) => {
//     //       res.should.have.status(201);
//     //       res.should.be.a("object");
//     //       res.body.should.have.property("success").eq(true);
//     //       res.body.should.have
//     //         .property("message")
//     //         .eq("Company Created");
//     //     });
//     //   done();
//     // });

//     it("It should return same name company error :", (done) => {
//       const data = {
//         companyName: "Aman Properties",
//         companyLocation: "Vijay Nagar",
//         companyCity: "Indore",
//       };
//       const validToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJfaWQiOiI2NGI1MWE2OGE1ODY1OWY4MmJkY2U0NmIiLCJ1c2VyTmFtZSI6IkFtYW4iLCJ1c2VyUGhvbmUiOjgwOTQxNDc0NTQsInVzZXJFbWFpbCI6ImFtYW5AZ21haWwuY29tIiwidXNlclBhc3N3b3JkIjoiJDJiJDEwJHI4Qm0wbGFEVjFmUlJZVjFaMEhaaXVMQ1R2aUdtaTl6VE85LzZNQWRtY0ZLL0ppMzRoaWlPIiwidXNlckNpdHkiOiJJbmRvcmUiLCJ1c2VyU3RhdGUiOiJNUCIsInVzZXJSb2xlIjoidXNlciIsImlzQWN0aXZlIjoidHJ1ZSIsInByb2ZpbGVQaWMiOiIvdXBsb2Fkcy91c2VyL2ltYWdlXzE2ODk1OTAzNzY5NDcuQU5LSVQgU0hBUk1BIFAgMi5qcGciLCJjcmVhdGVkQXQiOiIyMDIzLTA3LTE3VDEwOjM5OjM3LjUzOFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA3LTE3VDEwOjM5OjM3LjUzOFoiLCJfX3YiOjB9LCJpYXQiOjE2ODk4NjAxNzksImV4cCI6MTY4OTg2Mzc3OX0.S7FjSAl3YJzs50CcPc63wIa-xBdU3dMbaou1nlR8PTs'; 
//       chai
//         .request(server)
//         .post("/company/create")
//         .set('Authorization', `Bearer ${validToken}`)
//         .send(data)
//         .end((err, res) => {
//           res.should.have.status(409);
//           res.should.be.a("object");
//           res.body.should.have.property("success").eq(false);
//           res.body.should.have
//             .property("message")
//             .eq("This company Already Exists");
//         });
//       done();
//     });
//   });
// });
