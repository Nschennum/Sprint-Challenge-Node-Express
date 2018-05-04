const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');


const actionRouter = require('./Routers/actionRouters.js');
const projectRouter = require('./Routers/projectRouters.js');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.use('/api/action', actionRouter);
app.use('/api/project', projectRouter);


app.listen(3000, () => console.log('Nodemon Did Not Crash! Yay!'));