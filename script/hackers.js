let sequence = 0;
let playing = false;
let state;


button.addEventListener("click", () => {
    if (playing) {
        playing = false;
        buttonImg.src = 'img/play.png';
        reset();
        resetDisplay();
        resetSequenceIndicator();
        clearInterval(state);
        sequence = 0;
    } else {
        playing = true;
        buttonImg.src = 'img/stop.png';
        reset();
        trigger();
        sequenceIndicator(0);
        state = setInterval(play, 8000);
    }
    resetPreState();
});




const play = () => {
    sequence++;

    resetSequenceIndicator();

    if (sequence > 19) {
        playing = false;
        buttonImg.src = 'img/play.png';
        reset();
        resetDisplay();
        clearInterval(state);
        sequence = 0;
    } else {
        sequenceIndicator(sequence);
        reset();
        trigger();
    }
}


const trigger = () => {
    indicator.innerHTML = `Sequence: ${sequence}`;
//    direction.innerHTML = "&nbsp;";
//    tag.innerHTML = "&nbsp;";
//    tag2.innerHTML = "&nbsp;";

    let rAmbient = Math.random();
    let rAmbient2 = Math.random();    
    let rCosmic = Math.random();
    let rCosmic2 = Math.random();    
    let rBase = Math.random();
    let rBase2 = Math.random();
    let rDrum = Math.random();
    let rDrum2 = Math.random();
    let rSnare = Math.random();
    let rLightDrum = Math.random();
    let rExit = Math.random();
    let rExit2 = Math.random();        
    let rOriental = Math.random();
    let rLaser = Math.random();
    let rXx = Math.random();


    markovPlay(ambient, rAmbient, ambientInput[sequence]);
    markovPlay(ambient2, rAmbient2, ambientInput2[sequence]);    
    markovPlay(cosmic, rCosmic, cosmicInput[sequence]);
    markovPlay(cosmic2, rCosmic2, cosmicInput2[sequence]);        
    markovPlay(base, rBase, baseInput[sequence]);
    markovPlay(base2, rBase2, baseInput2[sequence]);
    markovPlay(drum, rDrum, drumInput[sequence]);
    markovPlay(drum2, rDrum2, drumInput2[sequence]);
    markovPlay(snare, rSnare, snareInput[sequence]);
    markovPlay(lightDrum, rLightDrum, lightDrumInput[sequence]);
    markovPlay(exit, rExit, exitInput[sequence]);
    markovPlay(exit2, rExit2, exitInput2[sequence]);        
    markovPlay(oriental, rOriental, orientalInput[sequence]);
    markovPlay(laser, rLaser, laserInput[sequence]);
    markovPlay(xx, rXx, xxInput[sequence]);

}


const reset = () => {
    resetAll(ambient);
    resetAll(ambient2);    
    resetAll(cosmic);
    resetAll(cosmic2);        
    resetAll(base);
    resetAll(base2);
    resetAll(drum);
    resetAll(drum2);
    resetAll(snare);
    resetAll(lightDrum);
    resetAll(exit);
    resetAll(exit2);      
    resetAll(oriental);
    resetAll(laser);
    resetAll(xx);
}



const resetDisplay = () => {
    indicator.innerHTML = "&nbsp;";
//    direction.innerHTML = ">>>";
//    tag.innerHTML = "&#8627; These are sound objects. Click to listen. &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &#8627; You can decide the possibility to play sounds. Click number and change value.";
//    tag2.innerHTML = "(0 = 0%, 1 = 100%, 0.5 = 50%, ...)";

    resetDisplayElement(ambientInput);
    resetDisplayElement(ambientInput2);
    resetDisplayElement(cosmicInput);
    resetDisplayElement(cosmicInput2);
    resetDisplayElement(baseInput);
    resetDisplayElement(baseInput2);
    resetDisplayElement(drumInput);
    resetDisplayElement(drumInput2);
    resetDisplayElement(snareInput);
    resetDisplayElement(lightDrumInput);
    resetDisplayElement(exitInput);
    resetDisplayElement(exitInput2);    
    resetDisplayElement(orientalInput);
    resetDisplayElement(laserInput);
    resetDisplayElement(xxInput);
}


const markovPlay = (target, param, input) => {
    if (param < input.value) {
        target.play();
        input.style.backgroundColor = "#00FF00";
        input.style.color = "black";
    } else {
        input.style.backgroundColor = "black";
        input.style.color = "#00FF00";
    }
}



const sequenceIndicator = (i) => {
    ambientInput[i].style.border = "solid 0.8px #00FF00";
    ambientInput2[i].style.border = "solid 0.8px #00FF00";    
    cosmicInput[i].style.border = "solid 0.8px #00FF00";
    cosmicInput2[i].style.border = "solid 0.8px #00FF00";        
    baseInput[i].style.border = "solid 0.8px #00FF00";
    baseInput2[i].style.border = "solid 0.8px #00FF00";
    drumInput[i].style.border = "solid 0.8px #00FF00";
    drumInput2[i].style.border = "solid 0.8px #00FF00";
    snareInput[i].style.border = "solid 0.8px #00FF00";
    lightDrumInput[i].style.border = "solid 0.8px #00FF00";
    exitInput[i].style.border = "solid 0.8px #00FF00";
    exitInput2[i].style.border = "solid 0.8px #00FF00";        
    orientalInput[i].style.border = "solid 0.8px #00FF00";
    laserInput[i].style.border = "solid 0.8px #00FF00";
    xxInput[i].style.border = "solid 0.8px #00FF00";
}

const resetSequenceIndicator = () => {
    for (let i = 0; i < number; i++) {
        ambientInput[i].style.border = "solid 0.8px black";
        ambientInput2[i].style.border = "solid 0.8px black";        
        cosmicInput[i].style.border = "solid 0.8px black";
        cosmicInput2[i].style.border = "solid 0.8px black";                
        baseInput[i].style.border = "solid 0.8px black";
        baseInput2[i].style.border = "solid 0.8px black";
        drumInput[i].style.border = "solid 0.8px black";
        drumInput2[i].style.border = "solid 0.8px black";
        snareInput[i].style.border = "solid 0.8px black";
        lightDrumInput[i].style.border = "solid 0.8px black";
        exitInput[i].style.border = "solid 0.8px black";
        exitInput2[i].style.border = "solid 0.8px black";                        
        orientalInput[i].style.border = "solid 0.8px black";
        laserInput[i].style.border = "solid 0.8px black";
        xxInput[i].style.border = "solid 0.8px black";
    }
}




const resetAll = (target) => {
    target.pause();
    target.currentTime = 0;
}


const resetDisplayElement = (input) => {
    for (let i = 0; i < number; i++) {
        input[i].style.backgroundColor = "black";
        input[i].style.color = "#00FF00";
    }
}


const showInfo = () => {
    const info = document.querySelector(".info");
    if (info.style.display == "block") {
        document.querySelector(".wrapper").style.display = "block";
        document.querySelector(".sequence").style.display = "block";
//        document.querySelector(".direction").style.display = "block";
        info.style.display = "none";
    } else {
        info.style.display = "block";
        document.querySelector(".wrapper").style.display = "none";
        document.querySelector(".sequence").style.display = "none";
//        document.querySelector(".direction").style.display = "none";
    }
}
