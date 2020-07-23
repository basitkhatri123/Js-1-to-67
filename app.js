// Chapter # 1



alert("Error ! please enter a valid password");

alert("Welcome to Js land \n Happy coding !");

alert("Wlecome to js land");

alert("Hello i can run js through my web browser console");



//Chapter # 2

var username="basit";
var myname="Khatri";
alert(username+myname);


var message="Hello World";
alert(message);


var stuname="Jhone Doe";
var age="15 years old";
var career="Certified mobile app developer";
alert(stuname);
alert(age);
alert(career);


var text="pizza";
alert(text + "\n"+ text.slice(0,4) + "\n"+ text.slice(0,3) + "\n"+ text.slice(0,2) + "\n"+ text.slice(0,1));

var email="basitkhatri53@gamil.com";
alert(email);

var book="A smart way to learn javascript";
alert(book);


document.write("<p>Yeah ! i can write html content thorugh Javascript</p>");

var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);



//Chpater # 3

var age="22";
alert("I am"+"" + age +""+ "years old");

var number= 15;
alert("You have visited this site" + "" + number + "" + "times" );

var bithYear= 1998;
document.write("My birth year is" + bithYear + "<br> Datatype of my declared varaible is number");


var visitorName= prompt("Enter Your name:");
var productTitle=prompt("Enter title of your product:");
var quantity=prompt("Enter quantity:");

document.write("<br>" + visitorName + " "+ "ordered" +" " + quantity + " " +productTitle +" "+ "on XYZ store");



//Chapter # 4


document.write("<br> <h3>Rules for naming JS variables </h3><br>");
document.write("Variable names can only contain, numbers , $ and For example $my_1stVariable");
document.write("Variables must begin with a letter, $ or _ For example $name, _name or name.<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS Keywords<br>");



//Chpater # 5

var num1=3;
var num2=5;
var add=num1+num2;
var sub=num1-num2;
var mult=num1*num2;
var div=num1/num2;
var mod=num1%num2;
document.write("Sum of 3 and 5 is"+ "" + add);
document.write("Sum of 3 and 5 is"+ "" + sub);
document.write("Sum of 3 and 5 is"+ "" + mult);
document.write("Sum of 3 and 5 is"+ "" + div);
document.write("Sum of 3 and 5 is"+ "" + mod);



var value=0;
document.write("Value after variable declaration is:" + value + "<br>");
value=5;
document.write("“Initial value is:" + value + "<br>");
value=value+1;
document.write("Value after increment is:" + value + "<br>");
value=value+7;
document.write("Value after addition is:" + value) + "<br>";
value=value-1;
document.write("Value after decreament is:" + value  + "<br>");
value=value%3;
document.write("The remainder is :" +value + "<br>");


var ticket=600;
var num= +prompt("Enter number of tickets:");
amount=ticket*num;
document.write("<br>Total Cost to buy"+""+num+""+"tickets of movie will be:" +""+ amount);


var tablenum=+prompt("Enter table for :");
for(var i=0;i<=10;i++){

    document.write(tablenum+""+"x"+i+""+"="+""+tablenum*i+"<br>");
}


var centigrade=+prompt("Enter temp in centigrade:");
var farenhite=+prompt("Enter temp in Farenhite:");

farenhite=(centigrade*9/5)+32;
document.write(centigrade+"C is turn into"+farenhite+"F"+"<br>");

centigrade=(farenhite-32)*5/9;
document.write(farenhite+"F is turn into"+centigrade+"C"+"<br>");



var Item1price=650;
var item2price=100;

var q1=+prompt("Enter Quantity for item 1:");
var q2=+prompt("Enter Quantity for item 2:");

var item1totalprice= Item1price*q1;
var item2totalprice=item2price* q2;
var cahrges=100;

var totalPrice=item1totalprice+item2totalprice+cahrges;

document.write("Total price for order is with cahrges 100 is:"+ ""+ totalPrice+ "<br>");



var totalmarks=980;
var marksObtained=804;
var percentage=(marksObtained/totalmarks)*100;
document.write("Percentage :"+percentage);



var dollar=104.80;
var riyal=28;
dollar=dollar*10;
riyal=riyal*25;

var pkr=dollar+riyal;

document.write("<br>Pkr currecny is :"+ pkr);




















//CHAPTER # 38-42


function power(a,b){

  return Math.pow(a,b)  

}
var powerr= power(2,4)
document.write(powerr + "<br>");


function leapyear()
{
var year=+prompt("Enter year to check leapyear:");
if (year % 100 === 0 && year % 400 === 0 && year % 4 === 0){
    document.write("Its a leap year"+"<br>");
}
else{
    document.write("Its not a leap year"+"<br>");
    }
}
leapyear();



function trianglearea(a,b,c){
    var S=(a+b+c)/2;
    var area= S*(S-a)*(S-b)*(S-c);
    return area;
    
}
var result=trianglearea(2,7,8);
document.write(result+"<br>");




function avg(sub1,sub2,sub3){
    var result = (sub1+sub2+sub3)/3;
    return result;
}

function per(sub1,sub2,sub3){
    var result=((sub1+sub2+sub3)*100)/300;
    return result;
}

function main(){

    var sub1=+prompt("Enter Marks for sub1:");
    var sub2=+prompt("Enter Marks for sub2:");
    var sub3=+prompt("Enter Marks for sub3:");
    var average=avg(sub1,sub2,sub3);
    var percentage=per(sub1,sub2,sub3);
    document.write("Average marks are :"+average+"<br>");
    document.write("Percentage of Styudent :"+percentage+"<br>")

}
main();



var names=['haseeb','muneeb','basit','wahaj'];
var find=prompt("Enter name to find location:");
find.toLowerCase();

for(var i=0; i<=names.length; i++){

    if(find===names[i]){

        document.write(find +" "+" found at "+i+"<br>");
        break;
    }
    else{
        document.write("Not found <br>");
    }
    
}


var text= "Mr Blue has a blue house and a blue car";
var res= text.replace(/a|e|i|o|u/gi,'');
document.write(res + "<br>");




const def = prompt('Enter the string to count two vowels in succetion : ');
const answer = getResult(def);
alert('The vowels in succetion are ' + answer + ' times');

function getResult(input) {
  const words = input.split(' ');
  let finalResult = 0;
  words.forEach((word) => {
    if (countVowelPair(word) > 0) {
      finalResult++;
    }
  });

  return finalResult;
}

function countVowelPair(word) {
  let count = 0;
  for (let i = 1; i < word.length; i++) {
    if (isVowel(word[i]) && isVowel(word[i - 1])) {
      count++;
    }
  }
  return count;
}

function isVowel(char) {
  let result = false;
  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      result = true;
      break;

    default:
      break;
  }

  return result;
}


var km=+prompt("Enter the km to convert it in 4 different units :");
var meter= km*1000;
var feet= km*3280.84;
var inch=km*39370.1;
var cm=km*100000;
document.write(km +" km"+ " Converted to "+ meter+" metres " + feet +" feets "+inch+" inches " + cm+" cm" +"<br>");




var employeesWorkTimmming = prompt('Enter employee work hours');
employeesWorkTimmming = Number(employeesWorkTimmming)
var extraTime = employeesWorkTimmming - 40;
function overTime(extraTime){
    return extraTime*12;
}
var employeeOverTime = overTime(extraTime);
document.write('emloyee gave ' + extraTime + ' Hr overtime. Over time paid to him is '+employeeOverTime+' Rs.<br>')





var cash = parseInt(prompt('Enter cash'));
function currencyDenomination(cash) {
    var hundred = parseInt(cash / 100);
    var fifty = parseInt((cash % 100) / 50);
    var ten = parseInt(((cash % 100) % 50) / 10);
    document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

}
currencyDenomination(cash)



//CHAPTER 43-48


function mouseOver(){

  document.getElementById('car').src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg"
}

function mouseOut(){

  document.getElementById('car').src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg"
}



var count=0;
function increament(){

  var inc=document.getElementById("display");
  inc.innerHTML=count++;

}

function decreament(){

  var dec=document.getElementById("display");
  dec.innerHTML=count--;

}


// CHAPTER # 49 to 52


