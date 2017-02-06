var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var  articles = {
'article-one':{
 title: 'this is my article one by saravana',
 heading: 'hello',
date: 'feb 5, 2017',
content:`
<p >
            is is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,
        </p>
        <p>
            This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,
        </p>
        <p >
            This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,
        </p>
            `
},
'article-two':{
 title: 'this is my article two by saravana',
 heading: 'hello fucks',
date: 'feb 6, 2017',
content:`
<p style="font-family:impact">
            is is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,
        </p>
        <p style="background:orange">
            This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,
        </p>
        <p >
            This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,
        </p>
        <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/RussellPeters08TIFF.jpg/220px-RussellPeters08TIFF.jpg">
        </div>
            `
},

        
};

function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmlTemplate =
`
<html>
<head>
    <h1>
    <title>
        ${title}
    </title>
    </h1>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet" />
  </head>
<body>
    <div class="container">
        
    <div>
        <a href="/">home</a>
    </div>
    <hr/>
    <h2>
        <div>
           ${heading}
        </div>
    </h2>
    <h3>
    
    ${date}
        </h3>
        <div>
            ${content}
        </div>
        
    
    </div>
</body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req,res){
    counter = counter +1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req,res){
    // articleName == article-one
    // articles[articleName] == {} content object for articleone
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
