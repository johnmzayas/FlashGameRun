      // the chat bot function!!! look at all those if elses. dont forget to check each button and make sure they work properly
      function greeting(value) {
         
        response=document.getElementById(value).innerHTML = "";
        
        // "How was your day" "My day was good."
        if (value==='Y') {
           let response=document.getElementById(value).innerHTML += 
           "<h2>Yes, my day was pretty good :)</h2>";
           document.getElementById("response").innerHTML += response;
           
           document.getElementById("response").innerHTML += 
           "<p>Cool! Now that I've got you here, isn't it such a bummer that Adobe stopped supporting Flash? Flash games were the best!</p>";
           document.getElementById("response").innerHTML += 
           "<button id='W' class='button' type='button' value='W' onclick='greeting(this.value)'>Yeah, they were best! :D</button> <button id='L' class='button' type='button' value='L' onclick='greeting(this.value)'>Nah, flash games are lame. You're lame.</button>";
           
           document.getElementById("Y").classList.add("hide");
           document.getElementById("N").classList.add("hide");

        }

        // "How was your day" "My day was bad"
        else if (value==="N") {
           let response=document.getElementById(value).innerHTML += 
           "<h2>No, it's not going great...</h2>";
           document.getElementById("response").innerHTML += response;

           document.getElementById("response").innerHTML += 
           "<p>Oh no! :( I'm sorry. Hopefully playing some flash games would make you feel better!</p>";
           
           document.getElementById("response").innerHTML += 
           "<button id='S' class='button' type='button' value='S' onclick='greeting(this.value)'>Sure!</button>";
           
           document.getElementById("Y").classList.add("hide");
           document.getElementById("N").classList.add("hide");
        }

        // "Do you like flash games?" "Yes they were the best"
        else if (value==="W" || value==="WW" || value==="WWW" || value==="WWWW") {
           
           if (value==="WW") {
              let response=document.getElementById(value).innerHTML += 
              "<h2>Yes!</h2>";
              document.getElementById("response").innerHTML += response;
           }

           else if (value==="WWW") {
              let response=document.getElementById(value).innerHTML += 
              "<h2>Absolutely!</h2>";
              document.getElementById("response").innerHTML += response;
           }

           else if (value==="WWWW") {
              let response=document.getElementById(value).innerHTML += 
              "<h2>Positively!!!</h2>";
              document.getElementById("response").innerHTML += response;
           }

           else if (value==="W"){
              let response=document.getElementById(value).innerHTML += 
              "<h2>Yeah, they were best! :D</h2>";
              document.getElementById("response").innerHTML += response;
           }
           
           document.getElementById("response").innerHTML += 
           "<p>Right?! I knew we'd be friends.</p>";

           document.getElementById("response").innerHTML += 
           "<button id='SU' class='button' type='button' value='SU' onclick='greeting(this.value)'>Wait, who are you?</button>";
           
           document.getElementById("W").classList.add("hide");
           document.getElementById("WW").classList.add("hide");
           document.getElementById("WWW").classList.add("hide");
           document.getElementById("WWWW").classList.add("hide");
           document.getElementById("L").classList.add("hide");
        }

        //// "Do you like flash games?" "no they suck (lame person answer)"
        else if (value==="L") {
           let response=document.getElementById(value).innerHTML += 
           "<h2>Nah, flash games are lame. You're lame.</h2>";
           document.getElementById("response").innerHTML += response;
           
           document.getElementById("response").innerHTML += 
           "<p>Well, you don't have to be mean. :( Let's try again. Flash games were the best RIGHT?</p>";

           document.getElementById("response").innerHTML += 
           "<button id='WW' class='button' type='button' value='WW' onclick='greeting(this.value)'>Yes!</button> <button id='WWW' class='button' type='button' value='WWW' onclick='greeting(this.value)'>Absolutely!</button> <button id='WWWW' class='button' type='button' value='WWWW' onclick='greeting(this.value)'>Positively!!!</button>";
           
           document.getElementById("W").classList.add("hide");
           document.getElementById("L").classList.add("hide");
        }

        // "We get along" "Wait who are you?"
        else if (value==="SU") {
           response=document.getElementById(value).innerHTML += 
           "<h2>Wait, who are you?</h2>";
           document.getElementById("response").innerHTML += response;

           document.getElementById("portrait").innerHTML += 
           "<p>Oh me? I'm John Marc Zayas! I'm budding web developer and I built this site! I just think flash games are really nifty. Wanna see some of my favorites?</p>";
           slideDown(document.getElementById('portrait'), 1000);

           document.getElementById("secondResponse").innerHTML += 
           "<br><button id='YE' class='button' type='button' value='YE' onclick='greeting(this.value)'>Sure, sounds fun!</button>";
           document.getElementById("SU").classList.add("hide");

           }

        // "gameWindow activator "
        // would be cool to add the slideUp function to hide the chat bot
        else if (value==="YE" || value==="S") {
           document.getElementById("chatbot").classList.add("hide");
           document.getElementById("greeting").classList.add("hide");

           document.getElementById("gameWindow").classList.remove("hide");
           
           // gameShuffler();
           replaceHTML();
           }
        }
        // create a dictionary and assign each key to and ID of game 
        function gameIndex() {
           const ar = [];
           for (let i = 0; i < 6; i++) {
              ar[i] = i;
           }
           ar.sort(function(){return 0.5 - Math.random()});
           return ar; 
        }

        const gameObject = {
           0: "indestructotank",
           1: "cookieclicker",
           2: "slither",
           3: "seterra",
           4: "crossy",
           5: "darkRoom"
        };

        let gameArray = gameIndex();
        let gameIterator = 0;

        function gameShuffler() {
           let arrayNum = gameArray[gameIterator];
           if (arrayNum !== undefined) {
              let htmlID = gameObject[arrayNum];
              gameIterator++;
              return(htmlID);
           }

           else {
              document.getElementById("end").classList.remove('hide');
           }


        }

        function replaceHTML() {
           let currentID = gameShuffler();
           for (let i = 0; i < Object.keys(gameObject).length; i++) {
              document.getElementById(gameObject[i]).classList.add('hide');
           }
           document.getElementById(currentID).classList.remove('hide');
        }

        /* SLIDE DOWN */
        // takes two arguements: what element you want to target and duration of slide
     let slideDown = (target, duration=500) => {

        target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;
        if (display === 'none') display = 'block';
        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout( () => {
           target.style.removeProperty('height');
           target.style.removeProperty('overflow');
           target.style.removeProperty('transition-duration');
           target.style.removeProprty('transition-property');

        }, duration);
     }
