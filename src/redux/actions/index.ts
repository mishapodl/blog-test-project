import * as PostsActionCreater from './posts'
import * as CommentsActionCreater from './comments'
import * as UsersActionCreater from './users'

export default {
  ...PostsActionCreater,
  ...CommentsActionCreater,
  ...UsersActionCreater,
}
