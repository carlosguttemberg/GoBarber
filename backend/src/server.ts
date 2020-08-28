import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());

app.use(routes);

app.post('/users', (request, response) => {
    const { name, email } = request.body;

    const user = {
        name,
        email,
    };

    return response.json({ message: 'hello world' });
});

app.listen(3333, () => {
    console.log('Server started on port 3333');
});
