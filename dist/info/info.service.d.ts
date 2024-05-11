import { UpdateInfoRequest as UpdateInfoRequestInterface } from './interfaces';
import { BaseResponse } from '../interfaces';
export declare class InfoService {
    validateInfo(rawData: UpdateInfoRequestInterface): Promise<BaseResponse>;
}
