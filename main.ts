enum RadioMessage {
    message1 = 49434,
    msg2 = 42467
}
radio.onReceivedMessage(RadioMessage.message1, function () {
    music.setBuiltInSpeakerEnabled(true)
    music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
radio.onReceivedValue(function (name, value) {
    current_letter_value = value
    basic.showString(name)
})
// This block is kind of the same as "on button B pressed", except it goes backwards.
input.onButtonPressed(Button.A, function () {
    current_letter_value += -1
    if (current_letter_value < 0) {
        current_letter_value = 19
    }
    showCurrentLetter()
})
// This block "on button A+B pressed", sends the data from 1 micro:bit to the other.
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.message1)
    radio.sendValue(current_letter, current_letter_value)
})
// This function is used in pressing button_A and button_B on the micro:bit. In this function, it sets the "current letter" variable to a value in the list variable "letters" to the variable "current letter value". Then, it shows the string of the assigned variable "current letter".
function showCurrentLetter () {
    current_letter = letters[current_letter_value]
    basic.showString(current_letter)
}
// When button_B on the micro:bit is pressed, it adds 1 to the variable "current letter value". Then, before showing the letter, it checks to see whether the "current letter value" variable is a value in which does not exist and is right after the last value. If it is, then it will set the variable "current letter value" to 0. Then it will tell a shortcut (called a function) to do the rest.
input.onButtonPressed(Button.B, function () {
    current_letter_value += 1
    if (current_letter_value == 20) {
        current_letter_value = 0
    }
    showCurrentLetter()
})
// SLNTR stands for Send Letters/Numbers Through Radio.
let current_letter = ""
let letters: string[] = []
let current_letter_value = 0
radio.setGroup(2)
basic.clearScreen()
current_letter_value = 0
letters = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10"
]
current_letter = letters[current_letter_value]
basic.showString(current_letter)
