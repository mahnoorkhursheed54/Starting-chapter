// "Chapter 1"

// TASK 1 :

alert("Hello world!");

// TASK 2:

alert("Error! Please enter a valid password.");

// TASK 3:

alert("Welcome to JS land...\nHappy Coding!");

// TASK 4:

alert("Welcome to JS land..."); 
alert("Happy Coding!");

// TASK 5:

var a ="Hello...I can run JS through my web browser's console";
console.log(a);

// "Chapter 2"

// TASK 1:

var username ;

// TASK 2:

var myName ;
myName = "Mahnoor Khursheed";

// TASK 3:

var message ;
message = "Hello World";
alert(message);

// TASK 4:

var a = "Jhone Doe";
var b = "15 years old";
var c = "Certified Mobile Application Development";
alert(a);
alert(b);
alert(c);

// TASK 5:

alert("PIZZA\nPIZZ\nPIZ\nPI\nP")

// TASK 6:

var email ;
email = "mahnoor.khursheed054@gmail.com";
alert("My email address is" + " " + email);

// TASK 7:

var book;
book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book A smarter way to learn JavaScript");

// TASK 8:

document.write("Yah! I can write HTML content through JavaScript");

// TASK 9:

var a = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(a);
document.write(a);

// "Chapter 3"

// TASK 1:

var age;
age = 21;
alert("I am 21 years old");

// TASK 3:

var birthYear;
birthYear = 1998;
document.write("My birth year is 1998" + "<br>");
document.write("Data type of my declared variable is number")

// TASK 4:

var visitorName;
visitorName = "John Doe";
var productTitle;
productTitle = "T-shirts";
var quantity;
quantity = 5;
document.write("John Doe ordered 5 T-shirt(s) on XYZ Clothing store.");

// "Chapter 4"

// TASK 1:

var a , b , c;
a = b = c = 10;

// TASK 2:

// 5 legal variables:

var a = "Ali";
var b = $;
var c = 10;
var d = _;
var userName = "Ahmed";

// 5 illegal variables:

// var user Name = "Ali";
// var a = *;
// var b = ?;
// var c = &;
// var d = !;

// TASK 3:

document.write("Rules for naming JS variables" + " " + "<br>" + "<br>") 
document.write("Variable names can only contain , numbers, $ and _. For example $my_1stVariable" + " " + "<br>")
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name" + " " + "<br>")
document.write("Variable names are case sensitive" + " " + "<br>") 
document.write("Variable names should not be JS keywords" + " " + "<br>") 

// "Chapter 5"

// TASK 1:

var a = +prompt("Enter first value","Your first value is:");
var b = +prompt("Enter second value","Your second value is:");
var c = a+b;
document.write("Sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// TASK 2:

var a = +prompt("Enter first value","Your first value is:");
var b = +prompt("Enter second value","Your second value is:");
var c = a-b;
document.write("Subtraction of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// TASK 2:

var a = +prompt("Enter first value","Your first value is:");
var b = +prompt("Enter second value","Your second value is:");
var c = a*b;
document.write("Multiplication of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// TASK 2:

var a = +prompt("Enter first value","Your first value is:");
var b = +prompt("Enter second value","Your second value is:");
var c = a/b;
document.write("Division of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// TASK 2:

var a = +prompt("Enter first value","Your first value is:");
var b = +prompt("Enter second value","Your second value is:");
var c = a%b;
document.write("Modulus of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// TASK 3:

var a;
document.write("Value after variable declaration is undefined" + "<br>")
a = 5;
document.write("Initial value:" + " " + a + "<br>")
a = ++a;
document.write("Value after increment is:" + " " + a + "<br>")
a = a + 7;
document.write("Value after addition is:" + " " + a + "<br>")
a = --a;
document.write("Value after decrement is:" + " " + a + "<br>")
a = a%3;
document.write("The remainder is:" + " " + a + "<br>")

// TASK 4:

var a = 600;
var b = 5;
var c = a*b;
document.write("Total cost to buy 5 tickets to a movie is" + " " + c + "PKR" + "<br>")

// TASK 5:

document.write("Table of 4" + "<br>")
for(var i = 1; i <= 10; i++){
  document.write("4" + "x" + i + "=" + 4*i + "<br>")
}

// TASK 6:

var inputCelsius  = 25;
var outputFahrenheit = (inputCelsius * 9)/5 + 32;
document.write(inputCelsius + '\u00B0 C is ' + outputFahrenheit + '\u00B0 F' + "<br>");

var inputFahrenheit  = 70;
var outputCelsius = (inputFahrenheit - 32)/9 * 5;
document.write(inputFahrenheit + '\u00B0 F is ' + outputCelsius + '\u00B0 C' + "<br>");

// TASK 7:

var price1 = 350;
var price2 = 400; 
var quantity1 = 2;
var quantity2 = 1;
var shippingCharges = 250;
var totalCost = (price1*quantity1) + (price2*quantity2) + shippingCharges;
document.write("Price of item 1 is" + " " + price1 + "<br>")
document.write("Quantity of item 1 is" + " " + quantity1 + "<br>")
document.write("Price of item 2 is" + " " + price2 + "<br>")
document.write("Quantity of item 2 is" + " " + quantity2 + "<br>")
document.write("Shipping charges" + " " + shippingCharges + "<br>" + "<br>")
document.write("Total cost of your order is" + " " + totalCost)

// TASK 8:

var totalMarks = 1100;
var marksObtained = 950;
var percentage = (marksObtained/totalMarks) * 100;
document.write("Total marks:" + " " + totalMarks + "<br>")
document.write("Marks obtained:" + " " + marksObtained + "<br>")
document.write("Percentage:" + " " + percentage)

// TASK 10:

var num = 7;
var expression = (num + 5 * 10) / 2;
document.write("Total calculation is:" + " " + expression)

// TASK 11:

var currentYear  = 2020;
var birthYear = 1984;
var age  = currentYear - birthYear;
document.write("Current year:" + " " + currentYear + "<br>");
document.write("Birth year:" + " " + birthYear + "<br>");
document.write('Age is: They are either ' + age + ' or ' + (age - 1));

// TASK 12:

var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius*radius);
document.write("Radius of a circle is:" + " " + radius + "<br>");
document.write("The circumference is:" + " " + circumference + "<br>");
document.write('The area is:' + " " + area);

// "Chapter 6-9"

// TASK 1:

var a = 10;
document.write("Result:" + "<br>")
document.write("The value of a is:" + " " + " " + a + "<br>")
document.write("................................................." + "<br>" + "<br>")
var a = ++a;
document.write("The value of ++a is:" + " " + " " + a + "<br>")
document.write("Now the value of a is:" + " " + " " + a + "<br>" + "<br>" + "<br>" + "<br>")
var b = a++;
document.write("The value of a++ is:" + " " + " " + b + "<br>")
document.write("Now the value of a is:" + " " + " " + a + "<br>" + "<br>" + "<br>" + "<br>")
var c = --a;
document.write("The value of --a is:" + " " + " " + c + "<br>")
document.write("Now the value of a is:" + " " + " " + a + "<br>" + "<br>" + "<br>" + "<br>")
var d = a--;
document.write("The value of a-- is:" + " " + " " + d + "<br>")
document.write("Now the value of a is:" + " " + " " + a + "<br>" + "<br>" + "<br>" + "<br>")

// TASK 2:

var a = 2 , b = 1;
var result = --a - --b + ++b + b--;
// --a = 1;
// --a - --b = 1;
// --a - --b + ++b = 2;
// --a - --b + ++b + b-- = 3;
document.write("a is 2" + " " + " " + "<br>")
document.write("b is 1" + " " + " " + "<br>")
document.write("result is " + " " + " " + result)

// TASK 3:

var a = prompt("Enter your name" , "Your name is")
alert("Welcome" + " " + a + " ")

// TASK 4:

var a = +prompt("Enter a number")
for(var i = 1; i <= 10; i++){
    document.write(a + "x" + i + "=" + a*i + "<br>")
} 
if(a == ""){
  for(var i = 1; i <= 10; i++){
    document.write(5 + "x" + i + "=" + 5*i + "<br>")
} 
}

// TASK 5:

var subject1 = prompt("Enter subject name")
var subject2 = prompt("Enter subject name")
var subject3 = prompt("Enter subject name")
var totalMarks = 100;
var totalMarks1 = 100 + 100 + 100;
var marks1 = prompt("Enter obtained marks in subject 1")
var marks2 = prompt("Enter obtained marks in subject 2")
var marks3 = prompt("Enter obtained marks in subject 3")
var totalMarks2 = marks1 + marks2 + marks3;
var percentage1 = marks1/totalMarks *100;
var percentage2 = marks2/totalMarks *100;
var percentage3 = marks3/totalMarks *100;
var totalPercentage = totalMarks2/totalMarks1 *100;
document.write("Subject" + " " + "Total Marks" + " " + "Obtained Marks" + " " + "Percentage" + "<br>")
document.write(subject1 + " " + totalMarks + " " + marks1 + " " + percentage1 + "<br>")
document.write(Subject2 + " " + totalMarks + " " + marks2 + " " + percentage2 + "<br>")
document.write(Subject3 + " " + totalMarks + " " + marks3 + " " + percentage3 + "<br>")
document.write(" " + " " + totalMarks1 + " " + totalMarks2 + " " + totalPercentage)

// "Chapter 9-11"

// TASK 1:

var city = prompt("Enter city name")
if(city=="Karachi"){
   alert("Welcome to city of lights")
}
else{
   alert("Welcome")
}

// TASK 2:

var gender = prompt("Enter gender")
if(gender=="male"){
   alert("Good Morning Sir")
}
else{
  alert("Good Morning Ma'am")
}

// TASK 3:

var signal = prompt("Enter color of road traffic signal")
if(signal=="red"){
  document.write("Must stop")
}
else if(signal=="yellow"){
  document.write("Ready to move")
}
else if(signal=="green"){
  document.write("Move now")
}

// TASK 4:

var fuel = prompt("Enter remaining fuel in car (in litres)")
if(fuel < 0.25){
    alert("Please refill the fuel in car")
}
else{
    alert("Fuel quantity is ok")
}

// TASK 5:

// (a):

var a = 4;
if(++a===5){
  alert("given condition for variable a is true");
}

// Output : The alert box displayed that given condition for variable a is true

// (b):

var b = 82;
if(b++===83){
  alert("given condition for variable b is true");
}

// Output : No output shown

// (c):

var c = 12;
if(c++===13){
  alert("condition 1 is true");
}
if(c===13){
  alert("condition 2 is true");
}
if(++c<14){
  alert("condition 3 is true");
}
if(c===14){
  alert("condition 4 is true");
}

// Output : The alert box displayed the condition 2 is true and another alert box showed condition 4 is true

// (d):

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if(totalCost === laborCost + materialCost){
  alert("The cost equals");
}

// Output : The alert box displayed that the cost equals

// (e):

if(true){
  alert("True");
}
if(false){
  alert("False");
}

// Output : The alert box displayed true

// (f):

if("car"<"cat"){
  alert("car is smaller than cat");
}

// Output : The alert box displayed car is smaller than cat

// TASK 6:

// TASK 7:

var a = 7;
var a = +prompt("Guess the secret number(ranging from 1 to 10)");
if(a===7){
  alert("Bingo! Correct answer")
}
else if(a===+1){
  alert("Close enough to the correct answer")
}
else{
  alert("Try again")
}

// TASK 8:

var num = +prompt("Enter a number")
if(num % 3 == 0){
  document.write("The number is divisible by 3")
}
else{
  document.write("The number is not divisible by 3")
}

// TASK 9:

var num = +prompt("Enter a number")
if(num % 2 == 0){
  document.write("The given input is an even number")
}
else{
  document.write("The given input is an odd number")
}

// TASK 10:

var temp = +prompt("Enter temperature");
if(temp > 40){
  document.write("It is too hot outside.")
}
else if(temp > 30){
  document.write("The Weather today is Normal.")
}
else if(temp > 20){
  document.write("Today’s Weather is cool.")
}
else{
  document.write("OMG! Today’s weather is so Cool.")
}

// TASK 11:

var num1 = +prompt("Enter your first number");
var sign = prompt("Enter your operator");
var num2 = +prompt("Enter your second number");
if(sign === "+"){
  document.write(num1+num2)
}
else if(sign === "-"){
  document.write(num1-num2)
}
else if(sign === "*"){
  document.write(num1*num2)
}
 else if(sign === "/"){
  document.write(num1/num2)
}
else if(sign === "%"){
  document.write(num1%num2)
}
else{
  document.write("No value entered")
}

// "Chapter 12-13"

// TASK 1:

var ch = prompt("Enter any character")
  if("ch>=65" && "ch<=90"){
    alert("The given input is an uppercase letter")
}
	else if("ch>=97" && "ch<=122"){
    alert("The given input is a lowercase letter")
}
	else if("ch>=48" && "ch<=57"){
    alert("The given input is a number")
}

// TASK 2:

var num1, num2;
num1 = +prompt("Input the First integer");
num2 = +prompt("Input the second integer");                                            
if(num1 > num2){
  alert("The larger number is" + " " + num1)
}   
else if(num1 === num2){
  alert("The two integers are equal")
} 

// TASK 3:

var num = +prompt("Enter a number")
if(num > 0){
  alert("The number is positive")
}
else if(num == 0){
  alert("The number is zero")
}
else if(num < 0){
  alert("The number is negative")
}

// TASK 4:

var char = prompt("Enter a character")
if(char == 'a'||'e'||'i'||'o'||'u'){
  alert("true");
}
else{
  alert("flase");
}

// TASK 5:

var a = prompt("Enter your password")
var b = "abc123";
if(a == ""){
  alert("Please enter your password")
}
else if(a === b){
  alert("Correct! The password you entered matches the original password")
}
else{
  alert("Incorrect Password")
}

// TASK 6:

var greeting; 
var hour = 13; 
if(hour < "18"){ 
  alert("Good day"); 
}
else{
  alert("Good evening"); 
} 

// "Chapter 14-16"

// TASK 1:

var arrayName = [];

// TASK 2:

students.name = students.name();

// TASK 3:

var arrayString;
arrayString = ["Ali" , "Ahmed" , "Amna"]

// TASK 4:

var arrayNum;
arrayNum = [1 , 2 , 3]

// TASK 5:

var arrayBoolean;
arrayBoolean = []

// TASK 6:

var arrayMixed;
arrayMixed = [1,2,3,"paul",5.5]

// TASK 7:

var arr = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M. Phil." , "PhD"]
document.write("Qualifications:" + "<br>" + "<br>");
document.write("1)" + " " + arr[0] + "<br>");
document.write("2)" + " " + arr[1] + "<br>");
document.write("3)" + " " + arr[2] + "<br>");
document.write("4)" + " " + arr[3] + "<br>");
document.write("5)" + " " + arr[4] + "<br>");
document.write("6)" + " " + arr[5] + "<br>");
document.write("7)" + " " + arr[6] + "<br>");
document.write("8)" + " " + arr[7] + "<br>");

// TASK 10:

var arr = [320 , 230 , 480 , 120]
document.write("Scores of students:" + "" + " " + arr + "<br>")
var arrSort = arr.sort()
document.write("Ordered scores of students:" + "" + " " + arrSort)

// TASK 11:

var arr = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
var arrSelected = arr.slice(2,4)
document.write("Cities list:" + "<br>" + " " + arr + "<br>" + "<br>")
document.write("Selected cities list:" + "<br>" + " " + arrSelected + "<br>" + "<br>")

// TASK 12:

var arr = ["This" , "is" , "my" , "cat"]
var newArr = arr.join("")
document.write(newArr)

// TASK 13:

var arr = ["keyboard," , "mouse," , "printer," , "monitor"]
document.write("Devices:" + "<br>");
document.write(arr + "<br>" + "<br>");
document.write(arr[0] + "<br>");
document.write(arr[1] + "<br>");
document.write(arr[2] + "<br>");
document.write(arr[3] + "<br>");

// TASK 14:

var arr = ["keyboard," , "mouse," , "printer," , "monitor"]
document.write("Devices:" + "<br>");
document.write(arr + "<br>" + "<br>");
document.write(arr[3] + "<br>");
document.write(arr[2] + "<br>");
document.write(arr[1] + "<br>");
document.write(arr[0] + "<br>");

// "Chapter 17-20"

// TASK 1:

var arr = [[],[]];
arr[0][2] = [];
arr[1][3] = [];
alert(arr[0][2]);
alert(arr[1][3]);

// TASK 2:

var arr = [[],[],[],[]];
arr[1][1] = [0];
arr[1][2] = [1];
arr[1][3] = [2];
arr[1][4] = [3];
arr[2][1] = [1];
arr[2][2] = [0];
arr[2][3] = [1];
arr[2][4] = [2];
arr[3][1] = [2];
arr[3][2] = [1];
arr[3][3] = [0];
arr[3][4] = [1];
document.write(arr[1][1] + " ");
document.write(arr[1][2] + " ");
document.write(arr[1][3] + " ");
document.write(arr[1][4] + "<br>");
document.write(arr[2][1] + " ");
document.write(arr[2][2] + " ");
document.write(arr[2][3] + " ");
document.write(arr[2][4] + "<br>");
document.write(arr[3][1] + " ");
document.write(arr[3][2] + " ");
document.write(arr[3][3] + " ");
document.write(arr[3][4] + " ");

// TASK 3:

for(var i = 1; i <= 10; i++){
    document.write(i + "<br>")
} 

// TASK 4:

var num = +prompt("Enter a number to show its multiplication table")
var length = +prompt("Enter length multiplication table")
for(var i = 1; i <= length ; i++){
    document.write(num + "x" + i + "=" + num*i + "<br>")
} 

// TASK 5:

var fruits = new Array("apple", "banana", "mango", "orange", "strawberry")
var len = fruits.length;
for(var i = 0; i < len; i++){
  document.write(fruits[i] + "<br>");
}

// TASK 6:

for(var i = 1; i <= 10; i++){
  document.write(i + "," + " " + " " + " ")
} 
for(var i = 10; i > 0; i--){
  document.write(i + "," + " " + " " + " ")
}
for(var i = 0; i <= 20; i+=2){
  document.write(i + "," + " " + " " + " ")
} 
for(var i = 1; i <= 20; i++){
  if(i % 2 !== 0)
  document.write(i + "," + " "  + " " + " ")
} 
for(var i = 1; i <= 20; i++){
  if(i % 2 === 0)
  document.write(i + "k," + " "  + " " + " ")
} 

// TASK 8:

var arr = [24 , 53 , 78 , 91 , 12]
document.write("Array items:" + " " + arr + "<br>")
document.write("The largest number is" + " " + " ")
document.write(Math.max(24 , 53 , 78 , 91 , 12));

// TASK 9:

var arr = [24 , 53 , 78 , 91 , 12]
document.write("Array items:" + " " + arr + "<br>")
document.write("The smallest number is" + " " + " ")
document.write(Math.min(24 , 53 , 78 , 91 , 12));

// TASK 10:

for(var i = 1; i <= 100; i++){
  if(i%5 == 0)
  document.write(i + "," + " ")
} 