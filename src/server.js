const express = require('express');
const cors = require('cors');
const dogsRouter = require('./dogs/dogs-router');
const catsRouter = require('./cats/cats-router');
const {PORT, CLIENT_ORIGIN } = require('./config');

const app = express();
app.use(cors({
  origin: CLIENT_ORIGIN,
}));

app.use('/api/dog', dogsRouter);
app.use('/api/cat', catsRouter);

// Catch-all 404
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
});

app.listen(PORT, () => {
  console.log(`Serving on ${PORT}`);
});
