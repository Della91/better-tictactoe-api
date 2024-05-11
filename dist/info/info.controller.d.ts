import { InfoService } from './info.service';
import { UpdateInfoRequest } from './interfaces';
import { BaseResponse } from '../interfaces';
export declare class InfoController {
    private readonly infoService;
    constructor(infoService: InfoService);
    getConfig(bodyRequest: UpdateInfoRequest): Promise<BaseResponse>;
}
