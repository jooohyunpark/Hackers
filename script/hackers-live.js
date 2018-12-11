let sequence = 0;
let playing = false;
let state;


button.addEventListener("click", () => {
    if (playing) {
        playing = false;
        buttonImg.src = 'img/play.png';
        reset();
        resetDisplay();
        clearInterval(state);
        sequence = 0;
    } else {
        playing = true;
        buttonImg.src = 'img/stop.png';
        trigger();
        state = setInterval(play, 8000);
    }
});




const play = () => {
    sequence++;

    reset();
    trigger();
}


const trigger = () => {
    indicator.innerHTML = `Sequence: ${sequence}`;
    iTag.innerHTML = "input";
    tTag.innerHTML = "target";
    

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
    

    
    updateRandomVal(ambientRandom, rAmbient);
    updateRandomVal(ambientRandom2, rAmbient2);
    updateRandomVal(cosmicRandom, rCosmic);
    updateRandomVal(cosmicRandom2, rCosmic2);
    updateRandomVal(baseRandom, rBase);
    updateRandomVal(baseRandom2, rBase2);
    updateRandomVal(drumRandom, rDrum);
    updateRandomVal(drumRandom2, rDrum2);
    updateRandomVal(snareRandom, rSnare);
    updateRandomVal(lightDrumRandom, rLightDrum);
    updateRandomVal(exitRandom, rExit);
    updateRandomVal(exitRandom2, rExit2);
    updateRandomVal(orientalRandom, rOriental);
    updateRandomVal(laserRandom, rLaser);
    updateRandomVal(xxRandom, rXx);


    updateTag(ambientTag, ambientInput.value);
    updateTag(ambientTag2, ambientInput2.value);
    updateTag(cosmicTag, cosmicInput.value);
    updateTag(cosmicTag2, cosmicInput2.value);
    updateTag(baseTag, baseInput.value);
    updateTag(baseTag2, baseInput2.value);
    updateTag(drumTag, drumInput.value);
    updateTag(drumTag2, drumInput2.value);
    updateTag(snareTag, snareInput.value);
    updateTag(lightDrumTag, lightDrumInput.value);
    updateTag(exitTag, exitInput.value);
    updateTag(exitTag2, exitInput.value);    
    updateTag(orientalTag, orientalInput.value);
    updateTag(laserTag, laserInput.value);
    updateTag(xxTag, xxInput.value);


    markovPlay(ambient, rAmbient, ambientInput);
    markovPlay(ambient2, rAmbient2, ambientInput2);
    markovPlay(cosmic, rCosmic, cosmicInput);
    markovPlay(cosmic2, rCosmic2, cosmicInput2);
    markovPlay(base, rBase, baseInput);
    markovPlay(base2, rBase2, baseInput2);
    markovPlay(drum, rDrum, drumInput);
    markovPlay(drum2, rDrum2, drumInput2);
    markovPlay(snare, rSnare, snareInput);
    markovPlay(lightDrum, rLightDrum, lightDrumInput);
    markovPlay(exit, rExit, exitInput);
    markovPlay(exit2, rExit2, exitInput2);    
    markovPlay(oriental, rOriental, orientalInput);
    markovPlay(laser, rLaser, laserInput);
    markovPlay(xx, rXx, xxInput);

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
    iTag.innerHTML = "&nbsp;";
    tTag.innerHTML = "&nbsp;";

    resetDisplayElement(ambientRandom, ambientTag, ambientInput);
    resetDisplayElement(ambientRandom2, ambientTag2, ambientInput2);
    resetDisplayElement(cosmicRandom, cosmicTag, cosmicInput);
    resetDisplayElement(cosmicRandom2, cosmicTag2, cosmicInput2);
    resetDisplayElement(baseRandom, baseTag, baseInput);
    resetDisplayElement(baseRandom2, baseTag2, baseInput2);
    resetDisplayElement(drumRandom, drumTag, drumInput);
    resetDisplayElement(drumRandom2, drumTag2, drumInput2);
    resetDisplayElement(snareRandom, snareTag, snareInput);
    resetDisplayElement(lightDrumRandom, lightDrumTag, lightDrumInput);
    resetDisplayElement(exitRandom, exitTag, exitInput);
    resetDisplayElement(exitRandom2, exitTag2, exitInput2);    
    resetDisplayElement(orientalRandom, orientalTag, orientalInput);
    resetDisplayElement(laserRandom, laserTag, laserInput);
    resetDisplayElement(xxRandom, xxTag, xxInput);
}


const adjustValue = (target) => {
    target.addEventListener("input", () => {
        if (Number(target.value) > 1) {
            target.value = 1;
        }
        if (isNaN(target.value)) {
            target.value = 0;
        }
    });
}


adjustValue(ambientInput);
adjustValue(ambientInput2);
adjustValue(cosmicInput);
adjustValue(cosmicInput2);
adjustValue(baseInput);
adjustValue(baseInput2);
adjustValue(drumInput);
adjustValue(drumInput2);
adjustValue(snareInput);
adjustValue(lightDrumInput);
adjustValue(exitInput);
adjustValue(exitInput2);
adjustValue(orientalInput);
adjustValue(laserInput);
adjustValue(xxInput);


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


const resetAll = (target) => {
    target.pause();
    target.currentTime = 0;
}


const updateRandomVal = (target, val) => {
    let textnode = document.createTextNode(' ' + val);
    target.insertBefore(textnode, target.childNodes[0]);
}


const updateTag = (target, val) => {
    let textnode = document.createTextNode(val + ' ');
    target.appendChild(textnode);
}


const resetDisplayElement = (ran, tag, input) => {
    ran.innerHTML = "";
    tag.innerHTML = "";
    input.style.backgroundColor = "black";
    input.style.color = "#00FF00";
}


const showInfo = () => {
    const info = document.querySelector(".info");
    if (info.style.display == "block") {
        document.querySelector(".wrapper").style.display = "block";
        document.querySelector(".sequence").style.display = "block";
        document.querySelector(".indicator").style.display = "block";                
        info.style.display = "none";        
    } else {
        info.style.display = "block";
        document.querySelector(".wrapper").style.display = "none";
        document.querySelector(".sequence").style.display = "none";
        document.querySelector(".indicator").style.display = "none";        
    }
}


