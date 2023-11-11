// aquí estarão as ações que cada botão faz, essas funções devem ter os mesmos nomes que foram definidos no data-action no html

import * as el from "./elements.js";
import state from "./state.js"
import * as timer from "./timer.js"

export function minutesAdd(){
  if(state.isRunning){
    return
  }
  let min = Number(el.minutes.textContent);
  
  el.minutes.textContent = String (min+5).padStart(2, "0")
  
  if(min>=60){
    el.minutes.textContent = String (60);
    return
  }
}

export function minutesSubtract(){
  if(state.isRunning){
    return
  }
  let min = Number(el.minutes.textContent);
  el.minutes.textContent = String (min-5).padStart(2, "0")

  if(min<5){
    el.minutes.textContent = String (0).padStart(2, "0");
    el.seconds.textContent = String (0).padStart(2, "0");
  }
}

export function timerStart(){
  if(state.isRunning){
    return
  }
  state.isRunning = true;
  timer.countdown()

}

export function timerStop(){
  state.isRunning = false;

}
