import {resolversUsuario} from './user/resolvers.js'
import {typesUsuario} from './user/types.js'
import { resolversFilantropos} from './filantropos/resolvers.js';
import { typesFilantropo } from './filantropos/types.js';
import { typesServicios } from './servicios/types.js';
import { resolversServicios } from './servicios/resolvers.js';

export const resolvers = [resolversUsuario,resolversFilantropos,resolversServicios];
export const typeDefs  = [typesUsuario,typesFilantropo,typesServicios] ;
