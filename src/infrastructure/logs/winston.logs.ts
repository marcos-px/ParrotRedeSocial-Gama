import winston from "winston";
import path from "path";

let logger = winston.createLogger(
    {
        level: 'info',
        format: winston.format.combine(
            winston.format.errors({ stack:true }),
            winston.format.timestamp(),
            winston.format.json()
        ),
        transports:[
            new winston.transports.Console({level: 'info'}),
            new winston.transports.File({ filename: path.resolve('logs', 'info.log'), level: 'info'}),
            new winston.transports.File({ filename: path.resolve('logs', 'err.log'), level: 'error'}),
        ]
    }
);

export default logger;