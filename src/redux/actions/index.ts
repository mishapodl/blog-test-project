import * as PostsActionCreater from './posts'
import * as CommentsActionCreater from './comments'

export default {
  ...PostsActionCreater,
  ...CommentsActionCreater,
}
