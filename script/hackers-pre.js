/////////// sound pre settings ///////////
const ambientPre = document.querySelector("#ambient-pre");
const ambientPre2 = document.querySelector("#ambient-pre-2");
const cosmicPre = document.querySelector("#cosmic-pre");
const cosmicPre2 = document.querySelector("#cosmic-pre-2");
const basePre = document.querySelector("#base-pre");
const base2Pre = document.querySelector("#base-pre-2");
const drumPre = document.querySelector("#drum-pre");
const drum2Pre = document.querySelector("#drum-pre-2");
const snarePre = document.querySelector("#snare-pre");
const lightDrumPre = document.querySelector("#light-drum-pre");
const exitPre = document.querySelector("#exit-pre");
const exitPre2 = document.querySelector("#exit-pre-2");
const orientalPre = document.querySelector("#oriental-pre");
const laserPre = document.querySelector("#laser-pre");
const xxPre = document.querySelector("#xx-pre");
/////////////////////////////////////


let playingAmbientPre, playingAmbient2Pre, playingCosmicPre, playingCosmic2Pre, playingBasePre, playingBase2Pre, playingDrumPre, playingDrum2Pre, playingSnarePre, playingLightDrumPre, playingExitPre, playingExit2Pre, playingOrientalPre, playingLaserPre, playingXxPre;


const resetPreState = () => {
    playingAmbientPre = false;
    playingAmbient2Pre = false;    
    playingCosmicPre = false;
    playingCosmic2Pre = false;    
    playingBasePre = false;
    playingBase2Pre = false;
    playingDrumPre = false;
    playingDrum2Pre = false;
    playingSnarePre = false;
    playingLightDrumPre = false;
    playingExitPre = false;
    playingExit2Pre = false;        
    playingOrientalPre = false;
    playingLaserPre = false;
    playingXxPre = false;
}

resetPreState();


const playPre = (target) => {
    target.play();
}


ambientPre.addEventListener("click", () => {
    if (!playing) {
        if (!playingAmbientPre) {
            playingAmbientPre = true;
            playPre(ambient);

        } else {
            playingAmbientPre = false;
            resetAll(ambient);
        }
    }
});


ambientPre2.addEventListener("click", () => {
    if (!playing) {
        if (!playingAmbient2Pre) {
            playingAmbient2Pre = true;
            playPre(ambient2);

        } else {
            playingAmbient2Pre = false;
            resetAll(ambient2);
        }
    }
});


cosmicPre.addEventListener("click", () => {
    if (!playing) {
        if (!playingCosmicPre) {
            playingCosmicPre = true;
            playPre(cosmic);

        } else {
            playingCosmicPre = false;
            resetAll(cosmic);
        }
    }
});


cosmicPre2.addEventListener("click", () => {
    if (!playing) {
        if (!playingCosmic2Pre) {
            playingCosmic2Pre = true;
            playPre(cosmic2);

        } else {
            playingCosmic2Pre = false;
            resetAll(cosmic2);
        }
    }
});

basePre.addEventListener("click", () => {
    if (!playing) {
        if (!playingBasePre) {
            playingBasePre = true;
            playPre(base);

        } else {
            playingBasePre = false;
            resetAll(base);
        }
    }
});

base2Pre.addEventListener("click", () => {
    if (!playing) {
        if (!playingBase2Pre) {
            playingBase2Pre = true;
            playPre(base2);

        } else {
            playingBase2Pre = false;
            resetAll(base2);
        }
    }
});


drumPre.addEventListener("click", () => {
    if (!playing) {
        if (!playingDrumPre) {
            playingDrumPre = true;
            playPre(drum);

        } else {
            playingDrumPre = false;
            resetAll(drum);
        }
    }
});


drum2Pre.addEventListener("click", () => {
    if (!playing) {
        if (!playingDrum2Pre) {
            playingDrum2Pre = true;
            playPre(drum2);

        } else {
            playingDrum2Pre = false;
            resetAll(drum2);
        }
    }
});


snarePre.addEventListener("click", () => {
    if (!playing) {
        if (!playingSnarePre) {
            playingSnarePre = true;
            playPre(snare);

        } else {
            playingSnarePre = false;
            resetAll(snare);
        }
    }
});


lightDrumPre.addEventListener("click", () => {
    if (!playing) {
        if (!playingLightDrumPre) {
            playingLightDrumPre = true;
            playPre(lightDrum);

        } else {
            playingLightDrumPre = false;
            resetAll(lightDrum);
        }
    }
});


exitPre.addEventListener("click", () => {
    if (!playing) {
        if (!playingExitPre) {
            playingExitPre = true;
            playPre(exit);

        } else {
            playingExitPre = false;
            resetAll(exit);
        }
    }
});


exitPre2.addEventListener("click", () => {
    if (!playing) {
        if (!playingExit2Pre) {
            playingExit2Pre = true;
            playPre(exit2);

        } else {
            playingExit2Pre = false;
            resetAll(exit2);
        }
    }
});


orientalPre.addEventListener("click", () => {
    if (!playing) {
        if (!playingOrientalPre) {
            playingOrientalPre = true;
            playPre(oriental);

        } else {
            playingOrientalPre = false;
            resetAll(oriental);
        }
    }
});


laserPre.addEventListener("click", () => {
    if (!playing) {
        if (!playingLaserPre) {
            playingLaserPre = true;
            playPre(laser);

        } else {
            playingLaserPre = false;
            resetAll(laser);
        }
    }
});


xxPre.addEventListener("click", () => {
    if (!playing) {
        if (!playingXxPre) {
            playingXxPre = true;
            playPre(xx);

        } else {
            playingXxPre = false;
            resetAll(xx);
        }
    }
});




