import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function fivePlus(){
    timer.countdownFiveMinutes()
}

export function fiveMinus(){
    timer.countdownFiveMinMnutes()
}

export function soundTree(){
    sounds.floresta.play()
}

export function soundCloud(){
    sounds.chuva.play()
}

export function soundHouse(){
    sounds.cafeteria.play()
}

export function soundFire(){   
    sounds.lareira.play()

}