"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const dbConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    dialect: 'mysql'
};
exports.default = dbConfig;
module.exports = dbConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL2NvbmZpZy9kYi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBdUI7QUFFdkIsTUFBTSxRQUFRLEdBQUc7SUFDYixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO0lBQ3pCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87SUFDN0IsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztJQUM3QixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO0lBQ3pCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87SUFDN0IsT0FBTyxFQUFFLE9BQU87Q0FDbkIsQ0FBQTtBQUVELGtCQUFlLFFBQVEsQ0FBQztBQUV4QixNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyJ9