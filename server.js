var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
                article_one:{title:'articleone',
                               heading:'articleone',
                               date:'feb4 2017',
                                 content:`
                                <P1><h2>subtitle1</h2>
                                     Hi everyone!
                                     this is article onethis is article onethis is article onethis is article onethis is article onethis is article one</P1>`},
                 article_two:{title:'articletwo',
                               heading:'articleone',
                               date:'feb5 2017',
                                 content:`
                                <P1><h2>subtitle1</h2>
                                     Hi everyone!
                                     this is article twothis is article twothis is article twothis is article twothis is article twothis is article two</P1>`},
                 article_three:{title:'articlethree',
                               heading:'articlethree',
                               date:'feb6 2017',
                                 content:`
                                <P1><h2>subtitle1</h2>
                                     Hi everyone!
                                     this is article threethis is article threethis is article threethis is article threethis is article threethis is article three</P1>`},
};
function createtemplete(data){var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmltemplete=`<!DOCTYPE html>
<head>
<link href="/ui/style.css" rel="stylesheet" />
<title>${title}</title></head>
<meta name="viewport" content="width=device-width" initial="scale-1"/>
<div>
        <a href="/">home</a>
 </div>
 <hr>
<h1>${heading}
</h1>  
<div>${date}</div>
<P1>${content}</P1>

</body>
</html>
 `;
return htmltemplete;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article_Name',function(req,res){
    var article_Name=req.params.article_Name;
    res.send(createtemplete(articles[article_Name]));});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log("IMAD course app listening on port ${port}!");
});
