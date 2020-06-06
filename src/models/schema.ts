"use strict";

export type Contributor  = {
  user: User
  stamp: String
  _id: String
}

/**
 * non-nullable
 * @code 
 * @success 
 * @message
 */
export type CreatePostOutput = {
  code: number
  success: Boolean
  message: String
  post: PostDetailed
}
/**
 * non-nullable
 * @title
 * @contentInMarkdown
 * @tags
 * @TagsInput
 */
export type CreateQuestionInput = {
  title: String
  contentInMarkdown: String
  tags: [TagsInput]
  poll: [PollOptionInput]
  isAnonymous: Boolean
}

/**
 * non-nullable
 * @postId
 * @responseId
 * @contentInMarkdown
 */
export type createReplyInput = {
  postId: String
  responseId: String
  contentInMarkdown: String
}

/**
 * non-nullable
 * @code
 * @success
 * @message
 */
export type createReplyOutput = {
  code: number
  success: Boolean
  message: String
  reply: Response
}

/**
 * non-nullable
 * @postId
 * @contentInMarkdown
 */

export type createResponseInput = {
  postId: String
  contentInMarkdown: String
}

/**
 * non-nullable
 * @code
 * @success
 * @message
 */
export type createResponseOutput = {
  code: number
  success: Boolean
  message: String
  response: Response
}

/**
 * non-nullable
 * @title
 * @contentMarkdown
 * @tags
 */

export type CreateStoryInput = {
  title: String
  contentMarkdown: String
  coverImageURL: String
  isRepublished: isRepublished
  tags: [TagsInput]
  isAnonymous: Boolean
}

/**
 * non-nullable
 * @code
 * @success
 * @message
 */

export type DeleteOutput = {
  code: number
  success: Boolean
  message: String
}

enum FeedType {
  GLOBAL,
  FOR_ME,
  FEATURED,
  RECENT,
}

/**
 * non-nullable
 * @code
 * @success
 * @message
 */

export type FollowUserOutput = {
  code: number
  success: Boolean
  message: String
}

/**
 * non-nullable
 * @originalArticleURL
 */
export type isRepublished = {
  originalArticleURL: String
}

export type Links = {
  hashnode: String
  website: String
  github: String
  twitter: String
}

// type Mutation = {
//   followUser(userId: String!): FollowUserOutput!
//   createStory(input: CreateStoryInput!): CreatePostOutput!
//   createPublicationStory(
//     input: CreateStoryInput!,
//     publicationId: String!,
//     hideFromHashnodeFeed: Boolean
//   ): CreatePostOutput!
//   updateStory(postId: String!, input: UpdateStoryInput!): CreatePostOutput!
//   reactToStory(input: ReactToPostInput!): ReactToPostOutput!
//   deleteStoryOrQuestion(id: String!): DeleteOutput!
//   createQuestion(input: CreateQuestionInput!): CreatePostOutput!
//   updateQuestion(postId: String!, input: CreateStoryInput!): CreatePostOutput!
//   reactToQuestion(input: ReactToPostInput!): ReactToPostOutput!
//   createResponse(input: createResponseInput!): createResponseOutput!
//   updateResponse(
//     responseId: String!,
//     postId: String,
//     contentInMarkdown: String!
//   ): createResponseOutput!
//   reactToResponse(input: ReactToResponseInput!): ReactToResponseOutput!
//   deleteResponse(responseId: String!, postId: String!): DeleteOutput!
//   createReply(input: createReplyInput!): createReplyOutput!
//   updateReply(
//     replyId: String!,
//     responseId: String!,
//     postId: String!,
//     contentInMarkdown: String!
//   ): createReplyOutput!
//   reactToReply(input: ReactToReplyInput!): ReactToReplyOutput!
//   deleteReply(
//     replyId: String!,
//     responseId: String!,
//     postId: String!
//   ): DeleteOutput!
// }

/**
 * non-nullable
 * @code
 * @success
 * @message
 */

export type MutationOutput = {
  code: number
  success: Boolean
  message: String
}

export type Poll = {
  pollOptions: [PollOption]
  totalVotes: number
  pollClosingDate: String
  pollRunningTime: String
}

/**
 * non-nullable
 * @_id
 * @option
 * @votes
 */

export type PollOption  = {
  _id: number
  option: String
  votes: number
}

/**
 * non-nullable
 * @content
 */

export type PollOptionInput = {
  content: String
}

/**
 * non-nullable
 * @_id
 * @type
 * @coverImage
 */

export type Post = {
  _id: number
  followersCount: number
  author: User
  cuid: String
  slug: String
  title: String
  type: String
  popularity: number
  reactionsByCurrentUser: [Reaction]
  totalReactions: number
  bookmarkedIn: [String]
  partOfPublication: Boolean
  contributors: [Contributor]
  isActive: Boolean
  replyCount: number
  responseCount: number
  dateAdded: String
  tags: [Tag]
  brief: String
  coverImage: String
  isAnonymous: Boolean
  dateUpdated: String
  dateFeatured: String
  reactions: [Reaction]
  poll: Poll
}

/**
 * non-nullable
 * @_id
 */

export type PostDetailed = {
  _id: number
  isRepublished: Boolean
  followersCount: number
  cuid: String
  slug: String
  title: String
  type: String
  partOfPublication: Boolean
  publication: Publication
  dateUpdated: String
  totalReactions: number
  numCollapsed: number
  isDelisted: Boolean
  isFeatured: Boolean
  isActive: Boolean
  replyCount: number
  responseCount: number
  popularity: number
  dateAdded: String
  contentMarkdown: String
  content: String
  brief: String
  coverImage: String
  isAnonymous: Boolean
  tags: [Tag]
  untaggedFrom: [String]
  contributors: [Contributor]
  bookmarkedIn: [String]
  reactions: [ReactionsAndCount]
  author: User
  reactionsByCurrentUser: [Reaction]
  poll: Poll
}

/**
 * non-nullable
 * @_id
 */

export type Publication = {
  _id: number
  author: String
  isActive: Boolean
  username: String
  headerColor: String
  logo: String
  metaHTML: String
  meta: String
  title: String
  domain: String
  favicon: String
  description: String
  displayTitle: String
  ogImage: String
  embedCode: String
  layout: String
  sitemapSubmitted: Boolean
  tweetedAboutBlog: Boolean
  fbPixelID: String
  gaTrackingID: String
  isAMPEnabled: Boolean
  metaTags: String
  imprnumber: String
  imprnumberMarkdown: String
  links: Links
}

/**
 * non-nullable
 * @publicationId
 */

export type PublicationDetails  = {
  publicationId: String
}

// type Query = {
//   user(username: String!): User
//   storiesFeed(type: FeedType!, page: number): [Post]
//   discussionsFeed(type: FeedType!, page: number): [Post]
//   amas(page: number): [Post]
//   post(cuid: String!): PostDetailed
//   tagCategories: [TagCategory]
// }

/**
 * non-nullable
 * @image
 * @name
 */
export type Reaction = {
  image: String
  name: ReactionName
}

enum ReactionName {
  THUMBS_UP,
  LOVE,
  UNICORN,
  CLAP,
  BEER,
  TROPHY,
  HEART_EYES,
  TAKE_MY_MONEY,
  PARTY,
  ROCKET,
}

/**
 * non-nullable
 * @reaction
 * @count
 */

export type ReactionsAndCount = {
  reaction: Reaction
  count: number
}

/**
 * non-nullable
 * @reaction
 * @postId
 */

export type ReactToPostInput = {
  reaction: ReactionName
  postId: String
}

/**
 * non-nullable
 * @code
 * @success
 * @message
 */

export type ReactToPostOutput = {
  code: number
  success: Boolean
  message: String
}

/**
 * non-nullable
 * @postId
 * @responseId
 * @replyId
 * @reaction
 */

export type ReactToReplyInput = {
  postId: String
  responseId: String
  replyId: String
  reaction: ReactionName
}

/**
 * non-nullable
 * @code
 * @success
 * @message
 */

export type ReactToReplyOutput = {
  code: number
  success: Boolean
  message: String
}

/**
 * non-nullable
 * @responseId
 * @postId
 * @reaction
 */

export type ReactToResponseInput = {
  responseId: String
  postId: String
  reaction: ReactionName
}

/**
 * non-nullable
 * @code
 * @success
 * @message
 */

export type ReactToResponseOutput = {
  code: number
  success: Boolean
  message: String
}

/**
 * non-nullable
 * @_id
 * @content
 * @contentMarkdown
 * @author
 * @dateAdded
 */
export type Reply = {
  _id: number
  content: String
  contentMarkdown: String
  author: User
  dateAdded: String
  isActive: Boolean
  stamp: String
  totalReactions: number
  reactions: [ReactionsAndCount]
  reactionsByCurrentUser: [Reaction]
}

/**
 * non-nullable
 * @_id
 */

export type ResponseH = {
  _id: number
  content: String
  contentMarkdown: String
  author: User
  stamp: String
  post: String
  totalReactions: number
  reactions: [ReactionsAndCount]
  bookmarkedIn: [String]
  isCollapsed: Boolean
  isActive: Boolean
  dateAdded: String
  popularity: number
  replies: [Reply]
  reactionsByCurrentUser: [Reaction]
}

export type SocialMedia = {
  twitter: String
  github: String
  stackoverflow: String
  linkedin: String
  google: String
  website: String
  facebook: String
}

/**
 * non-nullable
 * @_id
 */
export type Tag = {
  _id: number
  name: String
  slug: String
  isApproved: Boolean
  logo: String
  isActive: Boolean
  numPosts: number
  followersCount: number
  tagline: String
  wiki: String
  wikiMarkdown: String
  stats: TagStats
  leaderboard: TagLeaderBoard
  managers: [TagManager]
  socialMedia: TagSocialMedia
//   posts(filter: TagsPostFilter!, page: number): [Post]
  contributors: TagContributors
}

/**
 * non-nullable
 * @_id
 * @name
 * @isActive
 * @slug
 */
export type TagCategory = {
  _id: number
  name: String
  isActive: Boolean
  priority: number
  slug: String
  tags: [Tag]
}

export type TagContributorLeaders = {
  monthlyTopDevelopers: [TagLeaderBoardMember]
  allTimeTopDevelopers: [TagLeaderBoardMember]
}

export type TagContributors = {
  managers: [TagManager]
  leaders: TagContributorLeaders
}

export type TagLeaderBoard = {
  monthlyTopDevelopers: [TagLeaderBoardMember]
  allTimeTopDevelopers: [TagLeaderBoardMember]
}

export type TagLeaderBoardMember = {
  user: User
  appreciations: number
  upvotes: number
}

/**
 * non-nullable
 * @_id
 * @role
 */

export type TagManager = {
  _id: number
  role: String
  user: User
}

/**
 * non-nullable
 * @_id
 */

export type TagsInput = {
  _id: number
  slug: String
  name: String
}

export type TagSocialMedia = {
  github: String
  twitter: String
  officialWebsite: String
}

enum TagsPostFilter {
  HOT,
  RECENT,
  BEST,
}

export type TagStats = {
  currentWeekPostsCount: number
  lastWeekPostsCount: number
  currentWeekFollowersCount: number
  lastWeekFollowersCount: number
}

// type UpdateStoryInput = {
//   title: String!
//   contentMarkdown: String!
//   coverImageURL: String
//   isRepublished: isRepublished
//   isPartOfPublication: PublicationDetails
//   tags: [TagsInput]!
// }

/**
 * non-nullable
 * @_id
 */
export type User = {
  _id: number
  username: String
  name: String
  tagline: String
  isEvangelist: Boolean
  dateJoined: String
  socialMedia: SocialMedia
  numFollowing: number
  numFollowers: number
  isDeactivated: Boolean
  location: String
  photo: String
  coverImage: String
  numPosts: number
  numReactions: number
  publication: Publication
  followers: [User]
}