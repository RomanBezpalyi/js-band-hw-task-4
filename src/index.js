import './sass/main.scss';
import Model from './js/Model';
import View from './js/View';
import Controller from './js/Controller';

const view = new View();
const model = new Model();

// eslint-disable-next-line no-new
new Controller(model, view);
