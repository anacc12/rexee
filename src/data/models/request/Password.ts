export type Password = {
    userId: string,
    password: string,
    confirmedPassword: string,
    token: string | undefined,
    oldPassword: string | undefined
}