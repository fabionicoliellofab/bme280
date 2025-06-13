let humedad = 0
let temperatura = 0
let presion = 0
datalogger.setColumnTitles(
"presion",
"temperatura",
"humedad"
)
BME280.Address(BME280_I2C_ADDRESS.ADDR_0x76)
loops.everyInterval(600000, function () {
    presion = BME280.pressure(BME280_P.hPa)
    basic.showNumber(presion)
    temperatura = BME280.temperature(BME280_T.T_C)
    basic.showNumber(temperatura)
    humedad = BME280.humidity()
    basic.showNumber(humedad)
    datalogger.log(
    datalogger.createCV("presion", presion),
    datalogger.createCV("temperatura", temperatura),
    datalogger.createCV("humedad", humedad)
    )
    basic.pause(2000)
})
