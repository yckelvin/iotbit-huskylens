let id2 = 0
basic.showNumber(0)
huskylens.initI2c()
basic.showNumber(1)
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.showNumber(2)
OLED.init(128, 64)
basic.showNumber(3)
let name = [
"Anson Lo",
"Lokman",
"Edan Lui",
"Anson Kong"
]
basic.showNumber(4)
led.enable(false)
basic.forever(function () {
    huskylens.request()
    id2 = huskylens.readBox_s(Content3.ID)
    if (id2 > 0) {
        basic.pause(100)
        basic.showNumber(id2)
        OLED.clear()
        OLED.writeStringNewLine(name[id2 - 1])
    }
})
