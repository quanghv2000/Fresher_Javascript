import { BaseEntity } from './base/base.entity';
import { Movie } from './movie.entity';
import { User } from './user.entity';
export declare class Vote extends BaseEntity {
    status: string;
    movie: Movie;
    user: User;
}
