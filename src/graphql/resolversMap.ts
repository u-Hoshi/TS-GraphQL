import { UserResolvers } from './resolvers/UserResolver';
import { IResolvers } from 'graphql-tools';
import { merge } from 'lodash';

const resolverMap: IResolvers = merge(UserResolvers);
export default resolverMap;
