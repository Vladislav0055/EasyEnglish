
//DATA FOR PROCESSING------------------------------------------------------------------
const section1test2=[
{
    sentence:"She run fast.",
    value:"false",
    translate:"Она бегает быстро. ",
},
{
    sentence:"My mom cooks supper.",
    value:"true",
    translate:"Моя мама готовит ужин. ",
},
{
    sentence:"We drive to dacha.",
    value:"true",
    translate:"Мы едем на дачу. ",
},
{
    sentence:"They plays at the computer.",
    value:"false",
    translate:"Они играют за компьютером. ",
},
{
    sentence:"It breaks trees.",
    value:"true",
    translate:"Оно ломает деревья. ",
},
{
    sentence:"Alex studies well.",
    value:"true",
    translate:"Алекс учится хорошо. ",
},
{
    sentence:"You speaks too loud.",
    value:"false",
    translate:"Ты говоришь слишком громко. ",
},
{
    sentence:"Moscow grow fast.",
    value:"false",
    translate:"Москва растет быстро. ",
},
{
    sentence:"The plane fly to the ground.",
    value:"false",
    translate:"Самолет летит к земле. ",
},
{
    sentence:"Person paints a picture.",
    value:"true",
    translate:"Человек рисует картину. ",
},
]
const section1test1=[
    {
        sentence:"I __ to school.",
        choices:["go","goes"],
        translate:"Я иду в школу. ",
        value:0, //index of button with "true" choice within a div(fly in this case)
    },
    {
        sentence:"She __ a book.",
        choices:["reads","read"],
        translate:"Она читает книгу.",
        value:0,
    },
    {
        sentence:"They __ in the forest.",
        choices:["skies","sky"],
        translate:"Они катаются на лыжах в лесу.",
        value:1,
    },
    {
        sentence:"We __ dish.",
        choices:["wash","washes"],
        translate:"Мы моем посуду.",
        value:0,
    },
    {
        sentence:"He __ TV.",
        choices:["watch","watches"],
        translate:"Он смотрит телевизор.",
        value:1,
    },
    {
        sentence:"You __ in the river.",
        choices:["swim","swims"],
        translate:"Ты плаваешь в реке.",
        value:0,
    },
    {
        sentence:"Engine __ very well.",
        choices:["run","runs"],
        translate:"Двигатель работает хорошо.",
        value:1,
    },
    {
        sentence:"Alisa __ tea.",
        choices:["drink","drinks"],
        translate:"Алиса пьет чай.",
        value:1,
    },
     {
        sentence:"It __ fast.",
        choices:["moves","move"],
        translate:"Оно быстро движется.",
        value:0,
    },
    {
        sentence:"Sun __ bright.",
        choices:["shine","shines"],
        translate:"Солнце светит ярко.",
        value:1,
    },
   
]
const section2test1=[
    {
        sentence:"__ they like reading?",
        choices:["do","does"],
        translate:"Они любят читать? ",
        value:0, //index of button with "true" choice within a div(fly in this case)
    },
    {
        sentence:"__ the car moves?",
        choices:["does","do"],
        translate:"Машина движется?",
        value:0,
    },
    {
        sentence:"__ computer play chess?",
        choices:["do","does"],
        translate:"Компьютер играет в шахматы?",
        value:1,
    },
    {
        sentence:"__ it look good?",
        choices:["does","do"],
        translate:"Это выглядит красиво?",
        value:0,
    },
    {
        sentence:"__ you drink tea?",
        choices:["does","do"],
        translate:"Ты пьешь чай?",
        value:1,
    },
    {
        sentence:"__ weather change?",
        choices:["do","does"],
        translate:"Погода меняется?",
        value:1,
    },
    {
        sentence:"__ match burn?",
        choices:["do","does"],
        translate:"Спичка горит?",
        value:1,
    },
    {
        sentence:"__ dog bark?",
        choices:["does","do"],
        translate:"Собака лает?",
        value:0,
    },
     {
        sentence:"__ you cut the grass?",
        choices:["do","does"],
        translate:"Ты стрижешь траву?",
        value:0,
    },
    {
        sentence:"__ I come home?",
        choices:["do","does"],
        translate:"Я прихожу домой?",
        value:0,
    },
   
]
const section2test2=[
{
    sentence:"Do they call to office?",
    value:"true",
    translate:"Они звонят в офис? ",
},
{
    sentence:"Does I search for a pen?",
    value:"false",
    translate:"Я ищу ручку?",
},
{
    sentence:"Does he wash hands?",
    value:"true",
    translate:"Он моет руки?",
},
{
    sentence:"Do I take this subject?",
    value:"true",
    translate:"Я беру этот предмет?",
},
{
    sentence:"Does Olga study at the university?",
    value:"true",
    translate:"Ольга учится в университете?",
},
{
    sentence:"Do you catch a fish?",
    value:"true",
    translate:"Ты ловишь рыбу?",
},
{
    sentence:"Do we plan to go to Moscow?",
    value:"true",
    translate:"Мы планируем поехать в Москву?",
},
{
    sentence:"Does they feel unwell?",
    value:"false",
    translate:"Они чувствуют себя плохо?",
},
{
    sentence:"Do winter get colder?",
    value:"false",
    translate:"Зима становится холоднее?",
},
{
    sentence:"Do you like this test?",
    value:"true",
    translate:"Тебе нравится этот тест?",
},
]
const section3test1=[
    {
        sentence:"Alexander __ play football.",
        choices:["do not","does not"],
        translate:"Саша не играет в футбол.",
        value:1, //index of button with "true" choice within a div(fly in this case)
    },
    {
        sentence:"Cats __ eat grass.",
        choices:["does not","do not"],
        translate:"Коты не едят траву.",
        value:1,
    },
    {
        sentence:"Sportsmans __ drink beer",
        choices:["do not","does not"],
        translate:"Спортсмены не пьют пиво.",
        value:0,
    },
    {
        sentence:"He __ act like I want.",
        choices:["does not","do not"],
        translate:"Он не ведет себя как я хочу.",
        value:0,
    },
    {
        sentence:"It __ shake.",
        choices:["does not","do not"],
        translate:"Оно не трясется.",
        value:0,
    },
    {
        sentence:"We __ do anything bad.",
        choices:["do not","does not"],
        translate:"Мы не делаем что-либо плохого.",
        value:0,
    },
    {
        sentence:"Policeman __ talk to us.",
        choices:["do not","does not"],
        translate:"Полицейский не говорит с нами.",
        value:1,
    },
    {
        sentence:"She __ walk this night.",
        choices:["does not","do not"],
        translate:"Она не гуляет этой ночью.",
        value:0,
    },
     {
        sentence:"Animals __ like bad treatment.",
        choices:["do not","does not"],
        translate:"Животные не любят плохое отношение.",
        value:0,
    },
    {
        sentence:"The moon __ light during the day.",
        choices:["do not","does not"],
        translate:"Луна не светит в течении дня.",
        value:1,
    },
   
]
const section3test2=[
{
    sentence:"Airport do not work at holidays.",
    value:"false",
    translate:"Аэропорт не работает в праздники.",
},
{
    sentence:"Americans do not like little hamburgers.",
    value:"true",
    translate:"Американцы не любят маленькие гамбургеры.",
},
{
    sentence:"Birds does not fly to the South.",
    value:"false",
    translate:"Птицы не летят на юг.",
},
{
    sentence:"Fly does not bite you in the winter.",
    value:"true",
    translate:"Муха не кусает тебя зимой.",
},
{
    sentence:"Children do not go far from home.",
    value:"true",
    translate:"Дети не ходят далеко от дома.",
},
{
    sentence:"They do not give us money.",
    value:"true",
    translate:"Они не далют нам денег.",
},
{
    sentence:"He does not look at his phone.",
    value:"true",
    translate:"Он не смотрит в свой телефон.",
},
{
    sentence:"I does not have a plane.",
    value:"false",
    translate:"Я не имею своего самолета.",
},
{
    sentence:"My flat does not have 5 rooms.",
    value:"true",
    translate:"Моя квартира не имеет 5 комнат.",
},
{
    sentence:"You do not clean the house.",
    value:"true",
    translate:"Ты не убираешься дома.",
},
]
//SECTIONS NAMES --------------------------------------------------
const section1=document.getElementById("section1");
const section2=document.getElementById("section2");
const section3=document.getElementById("section3");


//GENERAL FUNCTIONS----------------------------------------

function ending(number){
    let ending=""
if(number==1){
    ending="кa"
}else if(number==3||number==4||number==2){
    ending="ки"
}else{
    ending="ок"
}
return ending;
}




function initiateControls(section){
    const divRes=document.createElement("div");
    divRes.id=section.id+"3"
    divRes.classList.add("resControls")

    section.appendChild(divRes)

    const div=document.createElement("div");
    div.classList.add("controls");
    const button1=document.createElement("button");
    button1.id=section.id+"1";
    button1.textContent="Проверить"
    const button2=document.createElement("button");
    button2.id=section.id+"2";
    button2.textContent="Обнулить результаты"
    div.appendChild(button1);
    div.appendChild(button2);
    section.appendChild(div)

    
}



function createEventListenersForControls(section){
const regex = /_/;
//regex.test('section12');
const buttonCheck=document.getElementById(`${section.id}1`)
buttonCheck.addEventListener("click",()=>{
   if(regex.test(section.id)==false){
    check(section)
   }else{
    test2Check(section)
   }
    
})
const buttonClear=document.getElementById(`${section.id}2`)
buttonClear.addEventListener("click",()=>{
    if(regex.test(section.id)==false){
    clearButtonsColor(section)
   }else{
    test2Clear(section)
   }
    
})
}
// FIRST TEST -----------------------------------------------------
//FUNCTIONS FOR FIRST TEST LOGIC------------------------------------



function check(section){
let count=0;
const buttons=section.querySelectorAll(".button");
const resDiv=document.getElementById(`${section.id}3`)
   if(!ifAllQuestionsAnswered(section)){
  
    resDiv.textContent="Отметьте все пункты."
    return
   }

   
   buttons.forEach(b=>{
    if(b.style.background=="green" && b.value=="true"){
        count++;
   }
   })
   if(count==buttons.length/2){
    addAsterisk(section)
    resDiv.textContent="Ура! Все правильно. Вас ждет еще один тест."
   } else{
    let count=countMistForFirstTask(section)
    let errCount=ending(count)
    resDiv.textContent=`У вас ${count} ошиб${errCount}. Изучите материал еще раз. И попробуйте снова.`;
    clearButtonsColor(section)
   }
   count=0;
  
}


function clearButtonsColor(section){
const buttons=section.querySelectorAll(".button");
 buttons.forEach(b=>{
    b.style.background="rgb(240, 240, 240)";
   })
}


function countMistForFirstTask(section){
    const buttons=section.querySelectorAll(".button");
    let count=0;
    buttons.forEach(n=>{
        if(n.style.background=="green" && n.value!="true"){
            count++;
        }
    })
    return count;
}


function ifAllQuestionsAnswered(section){
   const buttons=section.querySelectorAll(".button");
    const array=[...buttons]
    let count=array.filter(n=>n.style.background=="green");
    if(count.length!=buttons.length/2){
      return false; 
    }
    return true;  
}




//FUNCTIONS FOR FIRST TEST INITIATION ---------------------------------------

function addFirstTestElement(sentence,choices,translate,value,section){ 


const div=document.createElement("div");
div.className="questionSectionFirst";

const leftDiv=document.createElement("div");
leftDiv.className="leftDiv"
leftDiv.innerHTML=`<p>${sentence}<p/> <p>${translate}<p/>`;
div.appendChild(leftDiv)


const rightDiv=document.createElement("div");
rightDiv.className="rightDiv"
rightDiv.innerHTML=`
<button class="button">${choices[0]}</button>
<button class="button">${choices[1]}</button> 
 `
 div.appendChild(rightDiv)


section.appendChild(div);

 //adding "true" for appropriate button
const twoButtons=section.lastElementChild.querySelectorAll("button");
twoButtons[value].value="true";
}








function addClickEventForBTNs(section){
const buttons=section.querySelectorAll(".button");

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        button.style.background="green";
        const divButtons=button.parentNode.querySelectorAll("button");
        divButtons.forEach(n=>{
            if(n!=button){
                n.style.background="rgb(240, 240, 240)";
               
                
            }
            
        })
    })
}) 
}




function makeStructure(mass,section){

mass.forEach(({sentence,choices,translate,value})=>{
addFirstTestElement(sentence,choices,translate,value,section)
})

}

//FINAL FUNCTION FOR FIRST TEST--------------------------------------
function firstTestCreate(section,mass){
makeStructure(mass,section)
initiateControls(section)
addClickEventForBTNs(section)
createEventListenersForControls(section)
}

firstTestCreate(section1,section1test1)
firstTestCreate(section2,section2test1)
firstTestCreate(section3,section3test1)

 















// SECOND TEST -----------------------------------------------------




const section1_2=document.getElementById("section1_2")
const section2_2=document.getElementById("section2_2")
const section3_2=document.getElementById("section3_2")
// FUNCTIONS FOR SECOND TEST INITIATION-----------------------------------------------------

function createStructure(section,array){
const ul=document.createElement('ul')
section.appendChild(ul)
ul.innerHTML=``
 array.forEach(({sentence,value,translate})=>{
        ul.innerHTML+=`
        <li>
          <p>${sentence}</p>
          <p>(${translate})</p>
        </li>
        `
        ul.lastElementChild.firstElementChild.setAttribute("value",`${value}`)

    })
}



function makeSentenceToggled(section){
    const ul=section.querySelector("ul")
    const allPs=ul.querySelectorAll('[value]')
    allPs.forEach(e=>{

        e.addEventListener("click",()=>{
            e.classList.toggle("colored")

        })
    })
}

// FUNCTIONS FOR SECOND TEST LOGIC-----------------------------------------------------

function test2Clear(section){
const ul=section.querySelector("ul")
const allPs=ul.querySelectorAll('[value]')
allPs.forEach(e=>{
    e.classList.remove('colored');
})

}



function test2Check(section){
 const ul=section.querySelector("ul") 
 
 const result2=document.getElementById(`${section.id}3`)
 const allPs=ul.querySelectorAll('[value]')
    if([...allPs].filter(e=>e.classList.contains('colored')).length==0){
        
        result2.textContent="Отметьте хоть одно предложение."
        return
    }
    //count how many sentencies have red color
    const countLenght=[...allPs].filter(e=>{
    return (!e.classList.contains('colored')&&e.getAttribute('value')=="false" )||(e.classList.contains('colored')&&e.getAttribute('value')=="true")
    }).length
    
   
  
   if(countLenght>0){
    test2Clear(section)
    result2.textContent=`У вас ${countLenght} ошиб${ending(countLenght)}. Изучите материал
    и попробуйте снова.`
    
  } else{
    addAsterisk(section)
    result2.textContent=`Вы молодец, двигайтесь дальше!`
  
  }
}

// SECOND TEST FINAL FUNCTION-----------------------------------------------------

function secondTestCreate(section,array){
createStructure(section,array)
initiateControls(section)
makeSentenceToggled(section)
createEventListenersForControls(section)
}


secondTestCreate(section1_2,section1test2)
secondTestCreate(section2_2,section2test2)
secondTestCreate(section3_2,section3test2)
   




//FUNCTION FOR MAKING ASTERISK GREEN
function greenAsterisk(section){
const asterisk=document.createElement('div');
asterisk.classList.add("asterisk");
asterisk.textContent="*"
const placeForAst=section.querySelector(".controls");
placeForAst.appendChild(asterisk)
}



function addAsterisk(section){
   const asterisk=section.querySelector(".asterisk"); 
   if (!asterisk){
    greenAsterisk(section)
   }else{
    return
   }
   
}






