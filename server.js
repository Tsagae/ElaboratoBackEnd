const app = require('./index');

app.listen(27960,'172.17.0.1',(err) => {
    if (err) throw err
    console.log('Server running in http://172.17.0.1:27960')
});
