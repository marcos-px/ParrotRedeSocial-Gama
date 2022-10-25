"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = __importStar(require("sequelize"));
exports.default = {
    up: (queryInterface) => {
        return queryInterface.createTable('posts', {
            idpost: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                field: 'idpost'
            },
            content: Sequelize.DataTypes.STRING,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
            iduser: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: 'users'
                    },
                    key: 'iduser'
                }
            },
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('posts');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi1wb3N0cy5taWdyYXRpb25zLm15c3FsLmRiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL21pZ3JhdGlvbnMvMi1wb3N0cy5taWdyYXRpb25zLm15c3FsLmRiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBdUM7QUFFdkMsa0JBQWU7SUFDWCxFQUFFLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDN0MsT0FBTyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUN2QyxNQUFNLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTztnQkFDakMsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixLQUFLLEVBQUUsUUFBUTthQUNsQjtZQUNELE9BQU8sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDbkMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtZQUNuQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1lBQ25DLE1BQU0sRUFBRTtnQkFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO2dCQUNqQyxVQUFVLEVBQUM7b0JBQ1QsS0FBSyxFQUFFO3dCQUNILFNBQVMsRUFBRSxPQUFPO3FCQUNyQjtvQkFDRCxHQUFHLEVBQUUsUUFBUTtpQkFDZDthQUNGO1NBQ04sQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLGNBQXdDLEVBQUUsRUFBRTtRQUMvQyxPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNKLENBQUEifQ==