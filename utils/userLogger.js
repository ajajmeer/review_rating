const { createLogger, transports, format } = require("winston");

const userLogger = createLogger({
  transports: [
    new transports.File({
      filename: "logs/user/userLogger.log",
      level: "info",
      maxsize: 5242880,
      //format: format.combine(format.timestamp(), format.json()),
      format: format.combine(
        format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        format.align(),
        format.printf(
          (info) => `level : ${info.level} : ${[info.timestamp]} : ${info.message}`
        )
      ),
    })
  ]
})

module.exports = userLogger