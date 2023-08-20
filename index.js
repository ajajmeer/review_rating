// require('dotenv').config();
// const express = require('express');
// require('./config/modelConfig');
// let commonRouter = require('./routes/mainRouter');
// const logger = require('./utils/logger');

// const PORT=process.env.PORT||8000;
// const HOST="localhost";
// const app = express();

// app.use(express.json());
// app.use('/' , commonRouter);


// const server=app.listen(PORT, (req , res) => {
//   console.log(`Server is running on PORT : ${process.env.PORT||8000}`);
//   logger.info(`Server startred and ruing on http://${HOST}:${PORT}`)
// });

// module.exports=server;

require('dotenv').config();
const express = require('express');
require('./config/modelConfig');
let commonRouter = require('./routes/mainRouter');
const logger = require('./utils/logger');

const PORT=process.env.PORT||8000;
const HOST="localhost"
const app = express();

app.use(express.json());
app.use('/' , commonRouter);

const server=app.listen(process.env.PORT||8000 , (req , res) => {
  console.log(`Server is running on PORT : ${process.env.PORT||8000}`);
  logger.info(`Server startred and ruing on http://${HOST}:${PORT}`)
});

module.exports=server;