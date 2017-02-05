var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var  articles = {
'saravana-one':{
title: 'this is my article one by saravana',
heading: 'fuck you',
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
'saravana-two':{
title: 'this is my article one by saravana',
heading: 'fuck you 2',
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
        },
        
'saravana-thre':{
title: 'this is my article one by saravana',
heading: 'fuck you 3',
date: 'feb 5, 2017',
content:`
           
            <p>
                This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,
            </p>
            <p >
                This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,This is my first content,
            </p>`
    
},
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmlTemplate =
`<html>
<head>
    <title>
        ${title}
    </title>
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

app.get('/:articleName', function (req,res){
    // articleName == saravanaone
    // articles[articleName] == {} content objest for saravanaone
    var articleName = req.params.articleName;
    res.send(createTemplate(articles(articleName));
});

app.get('/article-two', function (req,res){
    res.send('article two will beserved here');
});

app.get('/article-three', function (req,res){
    res.send('article three will beserved here');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
