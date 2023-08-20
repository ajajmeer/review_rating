// let server = require("../index");
// let chaiHttp = require("chai-http");
// var chai = require("chai");
// //const randomName = require("node-random-name");

// chai.should();
// chai.use(chaiHttp);

// describe("Test API", () => {
//   // describe("POST /api/companyReview", () => {
//   //   it("It should create a review", (done) => {
//   //     const data = {
//   //       companyReviewSubject: "CodersId Review",
//   //       companyReview: " It's a good institute for backend and frontend programming learning",
//   //       companyReviewRating: "4",
//   //       userId: "64b9215e6a57a4bb88d5dc96",
//   //       companyId: "64b82855082ba61f46a4dd9d",
//   //     };
//   //     chai
//   //       .request(server)
//   //       .post("/companyreview/add")
//   //       .send(data)
//   //       .end((err, res) => {
//   //         res.should.have.status(201);
//   //         res.should.be.a("object");
//   //         // res.body.should.have.property("success").eq(true);
//   //         // res.body.should.have
//   //         //   .property("message")
//   //         //   .eq("Review Added Successfully");
//   //       });
//   //     done();
//   //   });
//   // });

//   // describe("UPDATE /api/review", () => {
//   //   it("It should update previous review", (done) => {
//   //     const data = {
//   //       companyReview: "It's a good institute for learning backend and frontend programming.",
//   //     };
//   //     chai
//   //       .request(server)
//   //       .patch("/companyreview/update/64be42281a9059aa18948d10")
//   //       .send(data)
//   //       .end((err, res) => {
//   //         res.should.have.status(201);
//   //         res.body.should.be.a("object");
//   //         res.body.should.have.property("success").eq(true);
//   //         res.body.should.have
//   //           .property("message")
//   //           .eq("Review update successfully");
//   //       });
//   //     done();
//   //   });
//   // });

//   describe("DELETE /api/review", () => {
//     it("It should delete the review", (done) => {
//       chai
//         .request(server)
//         .delete("/review/delete/64be42281a9059aa18948d10")
//         .end((err, res) => {
//           res.should.have.status(202);
//           res.body.should.be.a("object");
//           res.body.should.have.property("success").eq(true);
//           res.body.should.have
//             .property("message")
//             .eq("Review deleted successfully");
//         });
//       done();
//     });
//   });
// })
