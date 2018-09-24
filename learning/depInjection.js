const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    store: require('connect-session-knex')
}))