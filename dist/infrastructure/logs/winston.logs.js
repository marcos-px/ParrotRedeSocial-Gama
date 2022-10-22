"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const path_1 = __importDefault(require("path"));
const logger = winston_1.default.createLogger({
    format: winston_1.default.format.combine(winston_1.default.format.errors({ stack: true }), winston_1.default.format.timestamp(), winston_1.default.format.json()),
    transports: [
        new winston_1.default.transports.File({ filename: path_1.default.resolve('logs', 'error.log'), level: "error" }),
        new winston_1.default.transports.File({ filename: path_1.default.resolve('logs', 'info.log'), level: "info" })
    ]
});
exports.default = logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luc3Rvbi5sb2dzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL2xvZ3Mvd2luc3Rvbi5sb2dzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLGdEQUF3QjtBQUV4QixNQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLFlBQVksQ0FBQztJQUNoQyxNQUFNLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUMxQixpQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFDdEMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQzFCLGlCQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUN4QjtJQUNELFVBQVUsRUFBRTtRQUNSLElBQUksaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUM1RixJQUFJLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxjQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7S0FDN0Y7Q0FDSixDQUFDLENBQUM7QUFFSCxrQkFBZSxNQUFNLENBQUMifQ==