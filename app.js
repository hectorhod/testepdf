var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(request, response){
    var tempFile="./arquivo_pdf_teste.pdf";
    fs.readFile(tempFile, function (err,data){
       response.contentType("application/pdf");
       response.send(data);
    });
  });

  app.listen(3000);