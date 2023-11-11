import state from "./state.js";
import * as el from "./elements.js";
import * as events from "./events.js";
import { kitchenTimer } from "./sounds.js";

function updateDisplay(minutes, seconds){

  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2,"0");
  el.seconds.textContent = String(seconds).padStart(2, "0")


}

export function countdown(){

  clearTimeout(state.countdownId)

  if(!state.isRunning){
    return
  }

  let minutes = Number (el.minutes.textContent);
  let seconds = Number (el.seconds.textContent);

  seconds -- 

  if(seconds<0){
    seconds = 59;
    minutes --
  }

  if(minutes<0){
    state.isRunning = false;
    kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds);

  state.countdownId = setTimeout(() => countdown(), 1000)
}

export function start(minutes, seconds){
  state.minutes = minutes;
  state.seconds = seconds;

  updateDisplay();
  events.registerControls();
  
}

