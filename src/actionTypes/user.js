export const POST_USER = 'POST_USER'

export const postUser = (user) => {
    return {
        type : POST_USER,
        user
    }
}
