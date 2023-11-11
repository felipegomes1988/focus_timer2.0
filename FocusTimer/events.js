import * as actions from "./actions.js";
import * as el from "./elements.js";
import { buttonPress } from "./sounds.js";
import state from "./state.js";
import * as sounds from "./sounds.js"


export function registerControls(){

  el.controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if(typeof actions[action] != "function"){

      return
    }

    buttonPress.play()
    actions[action]()
  })
}

export function toggleMusic(){

  el.treeButton.addEventListener("click", (event)=>{
  
    
  
    if(state.isMute){
      el.treeButton.classList.add("active");
      state.isMute = false;
      sounds.treeAudio.play();
      return
    }
    el.treeButton.classList.remove("active");
    state.isMute = true;
      sounds.treeAudio.pause()
   
  })

  el.rainButton.addEventListener("click", (event)=>{
  
  
    if(state.isMute){
  
      el.rainButton.classList.add("active");
      state.isMute = false;
      sounds.rainAudio.play();
      return
    }

    el.rainButton.classList.remove("active");
    state.isMute = true;
      sounds.rainAudio.pause()
   
  })

  el.cafeteriaButton.addEventListener("click", (event)=>{
  
  
    if(state.isMute){
  
      el.cafeteriaButton.classList.add("active");
      state.isMute = false;
      sounds.cafeteriaAudio.play();
      return
    }

    el.cafeteriaButton.classList.remove("active");
    state.isMute = true;
      sounds.cafeteriaAudio.pause()
   
  })

  el.fireButton.addEventListener("click", (event)=>{
  
  
    if(state.isMute){
  
      el.fireButton.classList.add("active");
      state.isMute = false;
      sounds.fireAudio.play();
      return
    }

    el.fireButton.classList.remove("active");
    state.isMute = true;
      sounds.fireAudio.pause()
   
  })
}