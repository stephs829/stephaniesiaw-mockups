var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index', {title: 'Stephanie Siaw'});
});

app.get('/styleguide', function (req, res) {
  res.render('styleguide', {title: 'SWYS Styleguide'});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
