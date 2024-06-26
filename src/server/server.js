import helmet from 'helmet';
import { App } from '../App';
import express from 'express';
import compression from 'compression';
import ReactDOM from 'react-dom/server';
import { indexTemplate } from './indexTemplate';

const PORT = process.env.PORT || 5000;
const app = express();
const SITE_URL = process.env.SITE_URL;
const IS_DEV = process.env.NODE_ENV !== 'production';

if (!IS_DEV) {
    app.use(compression());
    app.use(helmet({
        contentSecurityPolicy: false
    }));
}

app.use('/static', express.static('./dist/client'));

app.get('*', (request, response) => {
    response.send(
        indexTemplate(ReactDOM.renderToString(App())),
    );
});

app.listen(PORT, () => {
    console.log(`Server started on ${SITE_URL}:${PORT}`);
    console.log('CLIENT_ID', process.env.CLIENT_ID);
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('SECRET:', process.env.SECRET);
});