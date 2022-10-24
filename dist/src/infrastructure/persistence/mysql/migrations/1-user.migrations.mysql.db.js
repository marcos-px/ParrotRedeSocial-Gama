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
        return queryInterface.createTable('users', {
            iduser: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'iduser',
                autoIncrement: true
            },
            name: Sequelize.DataTypes.STRING,
            email: Sequelize.DataTypes.STRING,
            apartment: Sequelize.DataTypes.INTEGER,
            password: Sequelize.DataTypes.STRING,
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE,
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('users');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS11c2VyLm1pZ3JhdGlvbnMubXlzcWwuZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmFzdHJ1Y3R1cmUvcGVyc2lzdGVuY2UvbXlzcWwvbWlncmF0aW9ucy8xLXVzZXIubWlncmF0aW9ucy5teXNxbC5kYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQXVDO0FBRXZDLGtCQUFlO0lBQ1gsRUFBRSxFQUFFLENBQUMsY0FBd0MsRUFBRSxFQUFFO1FBQzdDLE9BQU8sY0FBYyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDdkMsTUFBTSxFQUFFO2dCQUNKLElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU87Z0JBQ2pDLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixLQUFLLEVBQUUsUUFBUTtnQkFDZixhQUFhLEVBQUUsSUFBSTthQUN0QjtZQUNELElBQUksRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDaEMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUNqQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1lBQ3RDLFFBQVEsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDcEMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSTtZQUNuQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1NBQ3RDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxjQUF3QyxFQUFFLEVBQUU7UUFDL0MsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDSixDQUFBIn0=