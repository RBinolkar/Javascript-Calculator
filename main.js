// calculator

//global var

var num1 = "";
var num2 = "";
var operator;
var flag = 0;
var display = document.getElementById("display");
var equalTo = 0;

//function setNumber(value)

function setValue(number){
	if (equalTo === 1) {
		clearButton();
	}
if (flag === 0) {
	num1 += number;
	//alert(num1);
	display.innerHtml += number;
}
else{
 num2 += number;
 display.innerHtml += number;
}
if(num1.length > 10 || num2.length > 10){
	display.innerHtml= "Max limit of digits reached";
}
} //end of function

//function oppClick(numeric code)

function oppClick(numericCode){
	operator=numericCode;
	var oppString= "";
	flag=1;
	if(operator===4){
		display.innerHtml+="/";
		oppString="/";
		}
		else if(operator===3){
			display.innerHtml+="*";
			oppString="*";
			}
		else if(operator===2){
			display.innerHtml+="-";
			oppString="-";
        } else{
        	display.innerHtml+="+";
        	oppString="+";
        }//end of else

        if(flag===1){
        	display.innerHtml= num1+oppString
        }//end of if

        if(flag===1 && num1===""){
        	clearButton();
        }//end of if

        if(equalTo===1){
        	clearButton();
        }//end of if

			}//end of function

//function equalClick

function equalClick(){
	equalTo=1;
	num1=parseFloat(num1);
	num2=parseFloat(num2);
	var result="";
	var roundedResult="";

	switch(true){
		case(operator===1):
		result=num1+num2;
		break;
		case(operator===2):
		result=num1-num2
		break;
		case(operator===3):
		result=num1*num2
		break;
		case(operator===4):
		result=num1/num2
		break;
	}//end of switch

roundedResult=result.toFixed(4);
display.innerHtml=roundedResult;

if (roundedResult==="NaN"){
	display.innerHtml="Not a valid Calculation";
}//end of if

}//end of function

//function clearButton

function clearButton(){
num1="";
num2="";
flag=0;
display.innerHtml="";
equalTo=0;

}//end of function

//function backspace

function backspace(){
	var temp1="";
	var temp2="";
	if(equalTo===1){
		clearButton();
	}//end of if 

	if(flag===0){
		temp1=num1.substring(0,num1.length-1);
		//alert(temp1);
		display.innerHtml=temp1;
		num1=temp1;
	}//end of if

	if(flag===1){
      display.innerHtml= num1;
      flag=0;
	}//end of if

	if(num2!==""){
		temp2=num2.substring(0,num2.length-1);
		display.innerHtml= num1+operator+num2;
		num2= temp2;
        flag=1;
setOppString();

	}//end of if

}//end of function

//function setDecimal

function setDecimal(){
if (flag===0){
num1="0.";
display.innerHtml=num1;
}// end of 1st if

if(num1.indexOf(".")=== -1){
num1+= ".";
display.innerHtml = num1;
}//end of 2nd if

if(flag===1){
if(num2===""){
num2="0.";
display.innerHtml+=num2;
}//end of 1st if

if(num2.indexOf('.')===-1){
num2+=".";
display.innerHtml=num1+operator+num2;
setOppString();
}//end of 2nd if
}//end of if for flag==1

}//end of function

//function setOppString

function setOppString(){

if (operator===1){
display.innerHtml=num1+"+"+num2;
} else if(operator===2){
display.innerHtml=num1+"-"+num2;
} else if(operator===3){
display.innerHtml=num1+"*"+num2;
} else if(operator===4){
display.innerHtml=num1+"/"+num2;
}
}//end of function
