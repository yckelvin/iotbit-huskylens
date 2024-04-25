let id = 0
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
basic.forever(function () {
    huskylens.request()
    id = huskylens.readBox_s(Content3.ID)
    if (id > 0) {
        basic.pause(500)
        basic.showNumber(id)
        OLED.clear()
        OLED.writeStringNewLine(name[id - 1])
    }
})
