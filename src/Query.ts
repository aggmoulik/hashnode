export const Query = {
    fetchUserDetails:  (username: String): String => {
        return `query user($username: String! = "${username}"){
            user(username: $username){
                _id,
                username,
                name,
                tagline,
                isEvangelist,
                dateJoined,
                socialMedia {
                    twitter,
                    github,
                    stackoverflow,
                    linkedin,
                    google,
                    website,
                    facebook
                },
                numFollowing,
                numFollowers,
                isDeactivated,
                location,
                photo,
                coverImage,
                numPosts,
                numReactions,
                followers {
                    username
                }
            }
        }`;
    },
}