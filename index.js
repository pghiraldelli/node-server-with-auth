const dotenv = require('dotenv');
dotenv.config();

var app = require('./config/app');

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));