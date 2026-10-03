import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const outputDirectory = resolve('dist');
const templatePath = resolve(outputDirectory, 'index.html');
const serverEntry = resolve(outputDirectory, 'server', 'entry-server.js');
const template = await readFile(templatePath, 'utf8');
const { render } = await import(pathToFileURL(serverEntry).href);
const html = template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
await writeFile(templatePath, html, 'utf8');
