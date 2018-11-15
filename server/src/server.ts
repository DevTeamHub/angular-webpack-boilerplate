import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { join } from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as express from 'express';
import { enableProdMode } from "@angular/core";

enableProdMode();

const app = express();

const PORT = process.env.PORT || 3200;
const DIST_FOLDER = join(process.cwd(), "dist", "browser");

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../../dist/server/main.bundle');

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.get('*.*', express.static(DIST_FOLDER));

app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'index.html'), { req });
});

app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
});