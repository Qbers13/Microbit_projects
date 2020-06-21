input.onButtonPressed(Button.A, function () {
    basic.showString("Arkanoid")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # # . .
        `)
})
