import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';
import compression from 'compression'
import helmet from 'helmet';

const PORT = process.env.PORT || 80;
const IS_DEV = process.env.NODE_ENV !== 'production';
const app = express();

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
    console.log(`Server started on reddinamix.fun:${PORT}`);
});