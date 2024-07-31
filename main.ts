input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
    music.play(music.stringPlayable("A D G F D G E C ", 384), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
basic.forever(function () {
	
})
