"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const models_1 = require("./models");
let InfoService = class InfoService {
    async validateInfo(rawData) {
        const data = (0, class_transformer_1.plainToClass)(models_1.UpdateInfoRequest, rawData);
        const validationErrors = await (0, class_validator_1.validate)(data);
        if (validationErrors.length > 0) {
            return {
                success: false,
                errors: validationErrors,
            };
        }
        return {
            success: true,
            data,
        };
    }
};
InfoService = __decorate([
    (0, common_1.Injectable)()
], InfoService);
exports.InfoService = InfoService;
//# sourceMappingURL=info.service.js.map