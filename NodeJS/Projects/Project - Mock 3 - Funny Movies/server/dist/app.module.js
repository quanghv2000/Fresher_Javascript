"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const movie_entity_1 = require("./entities/movie.entity");
const user_entity_1 = require("./entities/user.entity");
const vote_entity_1 = require("./entities/vote.entity");
const auth_module_1 = require("./modules/auth.module");
const movie_module_1 = require("./modules/movie.module");
const user_module_1 = require("./modules/user.module");
const vote_module_1 = require("./modules/vote.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                name: 'default',
                type: 'postgres',
                database: 'funny_movies',
                host: 'localhost',
                port: 5433,
                username: 'postgres',
                password: '123456789',
                logging: true,
                synchronize: true,
                entities: [user_entity_1.User, movie_entity_1.Movie, vote_entity_1.Vote],
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            movie_module_1.MovieModule,
            vote_module_1.VoteModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map