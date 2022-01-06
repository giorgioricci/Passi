input.onGesture(Gesture.Shake, function () {
    Passi += 1
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    led.stopAnimation()
})
input.onButtonPressed(Button.AB, function () {
    Passi = 0
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
})
let Passi = 0
Passi = 0
basic.forever(function () {
    basic.showNumber(Passi)
    basic.pause(5000)
    basic.clearScreen()
})
