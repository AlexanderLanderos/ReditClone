import { Post } from './entities/Post';
import { __prod__ } from './constants';

export default {
  entities: [Post],
  dbName: 'clonereddit',
  debug: !__prod__,
  type : 'postgresql',
}