const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: [ '9827f07cbb834bfaadd0feb250edb219' ] }));
app.use(authRouter);

app.listen(3000, () => {
	console.log('Listening');
});
