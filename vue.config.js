const fs = require('fs');

module.exports = {
    devServer: {
        https: {
            key: fs.readFileSync('/etc/ssl/private/my.key'),
            cert: fs.readFileSync('/etc/ssl/certs/my.crt'),
        },
    }
}