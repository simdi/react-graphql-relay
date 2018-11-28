import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use('/public', express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(port , _=> console.log(`Server started on port ${port}`));