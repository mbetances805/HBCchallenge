const router = require('express').Router()
const fs = require('fs');

module.exports = router

router.get('/', (req, res, next) => {
  fs.readFile('././data/users.json', 'utf8', function (err, data) {
    if (err) throw err;
    let users = JSON.parse(data);
    res.send(users);
  });
})
