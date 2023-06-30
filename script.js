var audio

function playAudio(AudioElementID) {
    document.getElementById(AudioElementID).play()
    audio = document.getElementById(AudioElementID)
    console.log(audio)
}
function stopAllAudio() {
    var audios = [
        document.getElementById("audio1"),
        document.getElementById("audio2"),
        document.getElementById("audio3"),
        document.getElementById("audio4"),
        document.getElementById("audio5")
    ]
    for (var i = 0; i < 5; i++) {
        audios[i].pause()
        audios[i].currentTime = 0
    }
}

function pauseAllMusic() { 
    var audios = [
        document.getElementById("audio1"),
        document.getElementById("audio2"),
        document.getElementById("audio3"),
        document.getElementById("audio4"),
        document.getElementById("audio5")
    ]
    for (var i = 0; i < 5; i++) {audios[i].pause()}
}
function becomeLoop() { audio.loop = true }
function disableLoop() { audio.loop = false }

function playAudio1() { playAudio("audio1") }
function playAudio2() { playAudio("audio2") }
function playAudio3() { playAudio("audio3") }
function playAudio4() { playAudio("audio4") }
function playAudio5() { playAudio("audio5") }