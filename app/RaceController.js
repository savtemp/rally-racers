import { AppState } from "./AppState.js";
// console.log(AppState);

function _drawRacers(){
    let racers = AppState.racers
    let template = ''
    racers.forEach(racer => template += racer.Template)
    // console.log(template);
    document.getElementById('racers').innerHTML = template
}

function _moveRacers(){}

export class RaceController{
    constructor(){
        // console.log("controller running");
        _drawRacers()
    }
}