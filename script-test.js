
	$('#button').blur(function(){
		$("#navbarTogglerContent").collapse('hide');
	});
var showLoading = function (selector) {
	document.querySelector(selector).innerHTML = 
	'<div class=text-center> <img src=../images/ajax-loader.gif> </img>';
}
var homeUrl = "../snippets/home-snippet-test.html";
document.addEventListener("DOMContentLoaded", function (event) {
    showLoading ("#main-content");
	$ajaxUtils.httpRequest(homeUrl, function(responseText) {
		document.getElementById("main-content").innerHTML = responseText;
	})
});

// L41, part1, 1.
// x = 1; 
// console.log(x);
// x = function () {
// 	return 'dada';
// };
// console.log(x);
// x = 'hello';
// console.log(x);
// x(); Geeft error dat x geen fn is.

// L41, part1, 2.
//var altijd gebruiken, van MDN: failure to declare variables will very likely lead to 
//unexpected results. Thus it is recommended to always declare variables, 
//regardless of whether they are in a function or global scope.
//zonder  var is hij altijd in global.


x = function () {
	return 'dada';
};
console.log(x); /*fn naam wordt bij deze notering niet getoond in console*/
function y () {
	return 'yada';
};
console.log(y); console.log(x()); console.log(y());

// L41, part1, 4.
x = function (x, y) {
	return x < y ;
};
console.log(x(2,3));

// L41, part1, 5.
var z = x(2,3); console.log(z);

// L41, part2, 1-6
var x = 2;
console.log ('in global ' + x);
var fn1 = function () {
	var x = 3;
	console.log('in fn1 ' + x)
	var fn2 = function () {
	console.log('in fn2 ' + x)};
	fn2 ();
};

fn1 ();

console.log('------------L42-----------------');
var undef; 
//var undef='def'; 
if (undef == undefined) {console.log('undef=' + undef);}
	else {console.log ('defined')};
undef='def';
console.log('undef=' + undef);
//console.log (lm);
var nl_var=null; console.log (nl_var);
console.log('------------Intermezzo: primitives met object coerce-----------------');
// https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/
var twelve = new Number(12);
twelve.prop1 = 13;
var lntw = twelve.toString.length;
console.log (twelve); console.log (lntw);
console.log('------------L43-p1----------------');
var concat = 'vb';
concat += '1'; 
// concat = concat + '2'; console.log(concat);
var L43num = 23;
var L43undefnum;
console.log (L43num + 2); 
console.log (L43undefnum + 2); 
var L43 = function (param1) { console.log ( 'param1=' + (param1 + 2)); }
L43 ();


var var1=10, var2="a";
if (var1 === var2) {console.log ("they're equal");}
//Hieronder gebeurt een copy van var2 naar var 1 en 't is altijd true'
if (var1 = var2) {console.log ("they're equal");}
console.log('------------L43-p2----------------');
if (true || "a" || 10 || -20 )
	{ console.log ('true'); }
else
	{console.log ('false'); }


console.log ('------------L43-p3----------------');

function fn123 () { 
	return {
		fn : "fn1"
	}; };
function fn234 () 
{ 
	return {fn : 'fn2'}; };
console.log (fn234());

var sum = 0;
for (i=0; i < 10; i++) {
	sum += i;
};
console.log (sum);
