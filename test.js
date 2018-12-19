var express = require('express');
var body=require('body-parser');
var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){

	res.render('find_x');

});

// function for finding X value
app.get('/findx',function(req,res){

	res.render('find_x');

});
app.get('/findXshow',function(req,res){

		var num = 3;
		var multi = 0;
		var xval = '';

		for (var i = 1; i <= 5; i++) {
			num = num + multi;

			if(i==5){
				xval = num;
			}

			multi = multi + 2;
		}


	res.render('find_x_show',{datavalue:xval});
});

// function for finding Y value
app.get('/findy',function(req,res){

	res.render('find_y');

});
app.get('/findYshow',function(req,res){

		var num1 = 24;
		var num2 = 10;
		var num3 = 2;
		var num4 = 99;

		var result_y = num4 - (num1+(num2*num3));


	res.render('find_y_show',{datavalue:result_y});
});

// function for finding NEW X value
app.get('/findnewx',function(req,res){

	res.render('find_new_x');

});


app.get('/findnewXshow',function(req,res){

		var num = 5;
		var addval = 2;
		var xval = '';

		for (var i = 1; i <= 5; i++) {

			if(i==5){
				xval = num;
			}

			num = addval+''+num;
			addval++;

		}

		res.render('find_new_x_show',{datavalue:xval});

});

	
app.listen(8081);