input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        motor.moveClockwise(500, stepUnit.Steps)
    }
    for (let index = 0; index < 2; index++) {
        motor.moveAntiClockwise(500, stepUnit.Steps)
    }
})
input.onButtonPressed(Button.B, function () {
    motor.moveAntiClockwise(8000, stepUnit.Steps)
})
let motor: stepperMotor.Motor = null
motor = stepperMotor.createMotor(
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P3
)
motor.setDelay(10)
