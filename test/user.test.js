// let server = require("../index");
// let chaiHttp = require("chai-http");
// var chai = require("chai");
// const randomEmail = require("random-email");
// const userSchema = require("../models/userSchema");
// const routes = require("../routes/userRoutes");

// chai.should();
// chai.use(chaiHttp);

// describe("Task Api", () => {
//   describe("POST /api/users", () => {
//     it("It should return login user detail :", (done) => {
//       const data = {
//         userEmail: "aman@gmail.com",
//         userPassword: "Aa1*a",
//       };
//       chai
//         .request(server)
//         .post("/user/login")
//         .send(data)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.should.be.a("object");
//           res.body.should.have.property("success").eq(true);
//           res.body.should.have.property("message").eq("LogIn successfully");
//           res.body.should.have.property("accessToken");
//         });
//       done();
//     });

//     it("It should return error message :", (done) => {
//       const data = {
//         userEmail: "aman@gmail.com",
//         userPassword: "Aa1*",
//       };
//       chai
//         .request(server)
//         .post("/user/login")
//         .send(data)
//         .end((err, res) => {
//           res.should.have.status(401);
//           res.should.be.a("object");
//           res.body.should.have.property("success").eq(false);
//           res.body.should.have
//             .property("message")
//             .eq("Invalid email or Password");
//         });
//       done();
//     });

//     it("It should return wrong email message :", (done) => {
//       const data = {
//         userEmail: "ashu@91gmail.com",
//         userPassword: "Aa1*a",
//       };
//       chai
//         .request(server)
//         .post("/user/login")
//         .send(data)
//         .end((err, res) => {
//           res.should.have.status(403);
//           res.should.be.a("object");
//           res.body.should.have.property("success").eq(false);
//           res.body.should.have
//             .property("message")
//             .eq("User is not recognized with this Email");
//         });
//       done();
//     });
//   });
// });

// describe("POST /api/users", () => {
//   // it("It should Add new user :", (done) => {
//   //   const user = {
//   //     userName: "Aman",
//   //     userEmail: randomEmail(),
//   //     userPassword: "Aman@123",
//   //     userCity: "Hoshangabad",
//   //     userState: "M.P.",
//   //     userPhone: "9876543210",
//   //   };
//   //   chai
//   //     .request(server)
//   //     .post("/user/create")
//   //     .set("Content-Type", "application/x-www-form-urlencoded")
//   //     .field(user)
//   //     .attach("profilePic", "C:\Users\PULKIT\OneDrive\Pictures\ankit.jpg")
//   //     .end((err, res) => {
//   //       res.should.have.status(201);
//   //       res.should.be.a("object");
//   //       res.body.should.have.property("success").eq(true);
//   //       res.body.should.have
//   //         .property("message")
//   //         .eq("user registered successfully");
//   //     });
//   //   done();
//   // });

//   it("It should return error message if same email is given :", (done) => {
//     const data = {
//       userName: "Aman",
//       userEmail: "aman@gmail.com",
//       userPassword: "Aa1*a",
//       userPhone: 8094147454,
//       userCity: "Baran",
//       userState: "Raj",
//     };
//     chai
//       .request(server)
//       .post("/user/create")
//       .send(data)
//       .end((err, res) => {
//         res.should.have.status(401);
//         res.should.have.a("object");
//         res.body.should.have.property("success").eq(false);
//         res.body.should.have
//           .property("message")
//           .eq("User is already registered With this Email");
//       });
//     done();
//   });
// });

// describe("POST /api/users", () => {
//   it("It should return email sent successfully :", (done) => {
//     const data = {
//       userEmail: "harshitsharma0529@gmail.com",
//     };
//     chai
//       .request(server)
//       .post("/user/resetpasswordemail")
//       .send(data)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.should.be.a("object");
//         res.body.should.have.property("success").eq(true);
//         res.body.should.have.property("message").eq("Email sent successfully");
//       });
//     done();
//   });

//   it("It should return error if the email is note valid :", (done) => {
//     const data = {
//       userEmail: "sharma0529@gmail.com",
//     };
//     chai
//       .request(server)
//       .post("/user/resetpasswordemail")
//       .send(data)
//       .end((err, res) => {
//         res.should.have.status(403);
//         res.should.be.a("object");
//         res.body.should.have.property("success").eq(false);
//         res.body.should.have.property("message").eq("Please Enter Valid Email");
//       });
//     done();
//   });
// });

// describe("POST /api/users", () => {
//   it("It should return reset password successfully :", (done) => {
//     const data = {
//       newPassword: "Aa1*a",
//       confirmPassword: "Aa1*a",
//     };
//     chai
//       .request(server)
//       .post("/user/resetpassword/64b921ec0768ad11b69797bb/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGI5MjFlYzA3NjhhZDExYjY5Nzk3YmIiLCJpYXQiOjE2ODk4NTg4NTIsImV4cCI6MTY4OTg2MDA1Mn0.LFqG8GGdPpRpei77UfgZbpmXOmqZek4gvKgAqGnav9I")
//       .send(data)
//       .end((err, res) => {
//         res.should.have.status(201);
//         res.should.be.a("object");
//         res.body.should.have.property("success").eq(true);
//         res.body.should.have
//           .property("message")
//           .eq("Password Updated Successfully");
//       });
//     done();
//   });

//   it("It should return error if new password and confirmPassword does not match :", (done) => {
//     const data = {
//       newPassword: "Aa1*a",
//       confirmPassword: "Aa1*a1",
//     };
//     chai
//       .request(server)
//       .post(
//         "/user/resetpassword/64b921ec0768ad11b69797bb/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NGI5MjFlYzA3NjhhZDExYjY5Nzk3YmIiLCJpYXQiOjE2ODk4NTg4NTIsImV4cCI6MTY4OTg2MDA1Mn0.LFqG8GGdPpRpei77UfgZbpmXOmqZek4gvKgAqGnav9I"
//       )
//       .send(data)
//       .end((err, res) => {
//         res.should.have.status(403);
//         res.should.be.a("object");
//         res.body.should.have.property("success").eq(false);
//         res.body.should.have
//           .property("message")
//           .eq(`"Confirm password" does not match`);
//       });
//     done();
//   });
// });
