let hunger = 100;
let hygiene = 100;
let rest = 100;
let mood = 100;
let total;
let timer;
let time;

let app = new Vue({
   el: '#app',
   data: {
      speed: 1,
   }
});



function Loop() {
   time = app.speed;

   total = hunger + hygiene + rest + mood;


   if (hunger <= 0 || hygiene <= 0 || rest <= 0 || mood <= 0) {
      document.getElementById("pet").src = "img/walkaway.gif";
      let final = clearInterval(timer);
      alert("Ваш питомец от вас уходит! Вы о нем плохо заботились!");
   } else if (hunger <= 50) {
      document.getElementById("pet").src = "img/hungry.png";
      document.getElementById('message').innerHTML = 'Ваш питомец голоден!';
   } else if (hygiene <= 50) {
      document.getElementById("pet").src = "img/wait.gif";
      document.getElementById('message').innerHTML = 'Похоже пора навести чистоту!';
   } else if (rest <= 50) {
      document.getElementById("pet").src = "img/scared.png";
      document.getElementById('message').innerHTML = 'Ваш питомец устал!';
   } else if (mood <= 50) {
      document.getElementById("pet").src = "img/play.gif";
      document.getElementById('message').innerHTML = 'Коту скучно!';
   }
   else if (total > 300) {
      document.getElementById("pet").src = "img/glad.png";
   }

   else if (total > 200) {
      document.getElementById("pet").src = "img/sad.png";
   }
   else if (total > 100) {
      document.getElementById("pet").src = "img/angry.png";
   }
   else if (total > 50) {
      document.getElementById("pet").src = "img/walkaway.gif";
   }

   hunger = hunger - parseInt(time);
   hygiene = hygiene - parseInt(time);
   rest = rest - parseInt(time);
   mood = mood - parseInt(time);


   document.getElementById('hunger').style.width = hunger + 'px';
   document.getElementById('hygiene').style.width = hygiene + 'px';
   document.getElementById('rest').style.width = rest + 'px';
   document.getElementById('mood').style.width = mood + 'px';

   document.getElementById('hunger').innerHTML = hunger + '%';
   document.getElementById('hygiene').innerHTML = hygiene + '%';
   document.getElementById('rest').innerHTML = rest + '%';
   document.getElementById('mood').innerHTML = mood + '%';

   if (hunger <= 80 && hunger >= 65) {
      document.getElementById('hunger').style.backgroundColor = "#CCFF66";
   }
   if (hunger <= 64 && hunger >= 50) {
      document.getElementById('hunger').style.backgroundColor = "#FFFF99";
   }
   if (hunger <= 49 && hunger >= 30) {
      document.getElementById('hunger').style.backgroundColor = "#FFCC99";
   }
   if (hunger <= 29 && hunger >= 0) {
      document.getElementById('hunger').style.backgroundColor = "#FF0066";
   }

   if (hygiene <= 80 && hygiene >= 65) {
      document.getElementById('hygiene').style.backgroundColor = "#CCFF66";
   }
   if (hygiene <= 64 && hygiene >= 50) {
      document.getElementById('hygiene').style.backgroundColor = "#FFFF99";
   }
   if (hygiene <= 49 && hygiene >= 30) {
      document.getElementById('hygiene').style.backgroundColor = "#FFCC99";
   }
   if (hygiene <= 29 && hygiene >= 0) {
      document.getElementById('hygiene').style.backgroundColor = "#FF0066";
   }

   if (rest <= 80 && rest >= 65) {
      document.getElementById('rest').style.backgroundColor = "#CCFF66";
   }
   if (rest <= 64 && rest >= 50) {
      document.getElementById('rest').style.backgroundColor = "#FFFF99";
   }
   if (rest <= 49 && rest >= 30) {
      document.getElementById('rest').style.backgroundColor = "#FFCC99";
   }
   if (rest <= 29 && rest >= 0) {
      document.getElementById('rest').style.backgroundColor = "#FF0066";
   }

   if (mood <= 80 && mood >= 65) {
      document.getElementById('mood').style.backgroundColor = "#CCFF66";
   }
   if (mood <= 64 && mood >= 50) {
      document.getElementById('mood').style.backgroundColor = "#FFFF99";
   }
   if (mood <= 49 && mood >= 30) {
      document.getElementById('mood').style.backgroundColor = "#FFCC99";
   }
   if (mood <= 29 && mood >= 0) {
      document.getElementById('mood').style.backgroundColor = "#FF0066";
   }
}


function Start() {
   timer = setInterval(Loop, 1000);
   document.getElementById('intro').style.visibility = "hidden";
}


function feed() {
   if (hunger <= 81) {
      hunger = hunger + 20;
      document.getElementById('hunger').innerHTML = hunger + '%';
      document.getElementById('hunger').style.width = hunger + 'px';
   } else {
      hunger = 100;
      document.getElementById('hunger').innerHTML = hunger + '%';
      document.getElementById('hunger').style.width = hunger + 'px';
   }

}


function clean() {
   if (hygiene <= 81) {
      hygiene = hygiene + 20;
      document.getElementById('hygiene').innerHTML = hygiene + '%';
      document.getElementById('hygiene').style.width = hygiene + 'px';
   } else {
      hygiene = 100;
      document.getElementById('hygiene').innerHTML = hygiene + '%';
      document.getElementById('hygiene').style.width = hygiene + 'px';
   }
}


function sleep() {
   if (rest <= 81) {
      rest = rest + 20;
      document.getElementById('rest').innerHTML = rest + '%';
      document.getElementById('rest').style.width = rest + 'px';
   } else {
      rest = 100;
      document.getElementById('rest').innerHTML = rest + '%';
      document.getElementById('rest').style.width = rest + 'px';
   }
}


function play() {
   if (mood <= 81) {
      mood = mood + 20;
      document.getElementById('mood').innerHTML = mood + '%';
      document.getElementById('mood').style.width = mood + 'px';
   } else {
      rest = 100;
      document.getElementById('mood').innerHTML = mood + '%';
      document.getElementById('mood').style.width = mood + 'px';
   }
}

function pause() {
   let pausepress = clearInterval(timer);
   alert("pause");
}

function openSettings() {
   document.getElementById("settings").style.visibility = "visible";
}
function closeSettings() {
   document.getElementById("settings").style.visibility = "hidden";
}