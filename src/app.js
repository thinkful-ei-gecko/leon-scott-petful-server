// // require('dotenv').config()
// const express = require('express');
// // const morgan = require('morgan')
// const cors = require('cors');
// // const helmet = require('helmet');
// const { NODE_ENV } = require('./config');
// const catsRouter = require('./cats/cats-router');
// const dogsRouter = require('./dogs/dogs-router');
// // const authRouter = require ('./auth/auth-router')

// const app = express();

// // app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
// //   skip: () => NODE_ENV === 'test',
// // }))
// app.use(cors());
// // app.use(helmet());

// app.use('/api/cat', catsRouter);
// app.use('/api/dog', dogsRouter);
// // app.use('/api/auth', authRouter)

// // eslint-disable-next-line no-unused-vars
// app.use((error, req, res, next) => {
//   let response;
//   if (NODE_ENV === 'production') {
//     response = { error: 'Server error' };
//   } else {
//     console.error(error);
//     response = { error: error.message, object: error };
//   }
//   res.status(500).json(response);
// });

// module.exports = app;
