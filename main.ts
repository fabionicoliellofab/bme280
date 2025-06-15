let Humedad = 0
let Temp = 0
let presion = 0
radio.setGroup(1)
BME280.PowerOn()
BME280.Address(BME280_I2C_ADDRESS.ADDR_0x76)
loops.everyInterval(60000, function () {
    presion = BME280.pressure(BME280_P.hPa)
    radio.sendValue("Presion", presion)
    Temp = BME280.temperature(BME280_T.T_C)
    radio.sendValue("Temp", Temp)
    Humedad = BME280.humidity()
    radio.sendValue("Humedad", Humedad)
    basic.pause(2000)
})
