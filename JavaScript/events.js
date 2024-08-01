import { controls } from "./elements.js"
import { controlSounds } from "./elements.js"
import * as actions from './actions.js'

export function registerControls(){
    controls.addEventListener('click', (event) =>{
        const action1 = event.target.dataset.action
        if(typeof actions[action1]() != 'function'){
            return
        }

        actions[action1]()
    })

    controlSounds.addEventListener('click', (event) =>{
       const action2 = event.target.dataset.action
       if(typeof actions[action2]() != 'function'){
        return
       }

       actions[action2]()    
    })
}