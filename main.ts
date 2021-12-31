input.onGesture(Gesture.Shake, function () {
    Passi += 1
    led.stopAnimation()
})
input.onButtonPressed(Button.AB, function () {
    Passi = 0
})
let Passi = 0
Passi = 0
basic.forever(function () {
    basic.showNumber(Passi)
})
