import { Injectable } from '@nestjs/common';
import { plainToClass } from "class-transformer";
import { classToPlain } from "class-transformer";

@Injectable()
export class ClassTransformService {

    getEntity<T>(entity: any, DTO: any, controlsVisualization?: any): T {
        const UserPlainObj = classToPlain(DTO, controlsVisualization);
        return plainToClass(entity, UserPlainObj, controlsVisualization);
    }

    
}
