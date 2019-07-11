$(document).ready(() => $('.loader-wrapper').delay(2000).fadeOut('slow') );



/////////// basic /////////////
const indicator = document.querySelector(".sequence");
const direction = document.querySelector(".direction");
const tag = document.querySelector(".tag");
const tag2 = document.querySelector(".tag2");
const button = document.querySelector('#play-button');
const buttonImg = document.querySelector('#button-img');
///////////////////////////////


/////////// sound settings ///////////
const ambient = document.querySelector("#ambient");
const ambient2 = document.querySelector("#ambient2");
const cosmic = document.querySelector("#cosmic");
const cosmic2 = document.querySelector("#cosmic2");
const base = document.querySelector("#base");
const base2 = document.querySelector("#base2");
const drum = document.querySelector("#drum");
const drum2 = document.querySelector("#drum2");
const snare = document.querySelector("#snare");
const lightDrum = document.querySelector("#light-drum");
const exit = document.querySelector("#exit");
const exit2 = document.querySelector("#exit2");
const oriental = document.querySelector("#oriental");
const laser = document.querySelector("#laser");
const xx = document.querySelector("#xx");
/////////////////////////////////////



let number = 20;
let ambientInput = [];
let ambientInput2 = [];
let cosmicInput = [];
let cosmicInput2 = [];
let baseInput = [];
let baseInput2 = [];
let drumInput = [];
let drumInput2 = [];
let snareInput = [];
let lightDrumInput = [];
let exitInput = [];
let exitInput2 = [];
let orientalInput = [];
let laserInput = [];
let xxInput = [];



const adjustValue = (target, num) => {
    for (let i = 0; i < num; i++) {
        target[i].addEventListener("input", () => {
            if (Number(target[i].value) > 1) {
                target[i].value = 1;
            }
            if (isNaN(target[i].value)) {
                target[i].value = 0;
            }
        });
    }
}


for (let i = 0; i < number; i++) {
    ambientInput[i] = document.querySelector(`#ambient-input-s${i+1}`);
    ambientInput2[i] = document.querySelector(`#ambient-input-2-s${i+1}`);    
    cosmicInput[i] = document.querySelector(`#cosmic-input-s${i+1}`);
    cosmicInput2[i] = document.querySelector(`#cosmic-input-2-s${i+1}`);        
    baseInput[i] = document.querySelector(`#base-input-s${i+1}`);    
    baseInput2[i] = document.querySelector(`#base-input-2-s${i+1}`);        
    drumInput[i] = document.querySelector(`#drum-input-s${i+1}`);        
    drumInput2[i] = document.querySelector(`#drum-input-2-s${i+1}`);         
    snareInput[i] = document.querySelector(`#snare-input-s${i+1}`); 
    lightDrumInput[i] = document.querySelector(`#light-drum-input-s${i+1}`); 
    exitInput[i] = document.querySelector(`#exit-input-s${i+1}`);     
    exitInput2[i] = document.querySelector(`#exit-input-2-s${i+1}`);     
    orientalInput[i] = document.querySelector(`#oriental-input-s${i+1}`); 
    laserInput[i] = document.querySelector(`#laser-input-s${i+1}`); 
    xxInput[i] = document.querySelector(`#xx-input-s${i+1}`);     
}


adjustValue(ambientInput, number);
adjustValue(ambientInput2, number);
adjustValue(cosmicInput, number);
adjustValue(cosmicInput2, number);
adjustValue(baseInput, number);
adjustValue(baseInput2, number);
adjustValue(drumInput, number);
adjustValue(drumInput2, number);
adjustValue(snareInput, number);
adjustValue(lightDrumInput, number);
adjustValue(exitInput, number);
adjustValue(exitInput2, number);
adjustValue(orientalInput, number);
adjustValue(laserInput, number);
adjustValue(xxInput, number);
