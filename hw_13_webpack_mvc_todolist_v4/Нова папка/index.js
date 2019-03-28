let express = require ('express');
require ('../webpack.config');
let server = express();
server.listen(888);
server.use(express.static('public'));

