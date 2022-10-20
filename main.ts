input.onButtonPressed(Button.A, function () {
    motor.moveClockwise(500, stepUnit.Steps)
})
input.onButtonPressed(Button.B, function () {
    motor.moveAntiClockwise(500, stepUnit.Steps)
})
let motor: stepperMotor.Motor = null
motor = stepperMotor.createMotor(
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P3
)
motor.setDelay(10)
