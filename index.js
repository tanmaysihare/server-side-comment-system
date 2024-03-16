const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

const db = require('./models');

const postRouter = require('./routes/Posts');
const commentsRouter = require('./routes/Comments');

app.use('/posts',postRouter);
app.use('/comments',commentsRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
    console.log('server is running on port 3001');
});
});
