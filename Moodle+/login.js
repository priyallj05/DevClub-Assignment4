console.log("Moodle+ successfully loaded!");

/*
const username=document.querySelector("#username");
username.value="your_username";
const password=document.querySelector("#password");
password.value="your_password";
*/

const login_element=document.querySelector("#login");
let login_text = login_element.innerText;
const arr1=login_text.split("\n");

let question = arr1[3];
const arr2=question.split(" ");

let answer="";

if(arr2[1]==="add"){
    let a=parseInt(arr2[2]);
    let b=parseInt(arr2[4]);
    answer=`${a+b}`;
}
else if(arr2[1]==="subtract"){
    let a=parseInt(arr2[2]);
    let b=parseInt(arr2[4]);
    answer=`${a-b}`;
}
else if(arr2[1]==="enter"){
    if(arr2[2]==="first"){
        answer=arr2[4];
    }
    else if(arr2[2]==="second"){
        answer=arr2[6];
    }
}

const captcha_input_element = document.querySelector("#valuepkg3"); 
captcha_input_element.value=answer;

//login_element.submit();
