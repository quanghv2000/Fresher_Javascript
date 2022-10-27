import { BaseEntity } from './base/base.entity';
import { User } from './user.entity';
export declare class Movie extends BaseEntity {
    title: string;
    description: string;
    url: string;
    sharedBy: User;
}
