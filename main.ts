let temperatura = 0
input.onButtonPressed(Button.A, function () {
    temperatura = input.temperature()
    basic.showString("" + temperatura + "C")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.compassHeading())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
})
