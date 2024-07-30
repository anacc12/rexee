export type IdentityResponse = {
    succeeded: boolean
    isLockedOut: boolean
    isNotAllowed: boolean
    errors?: []
    data?: Response
}

export type Response = {
    succeeded: boolean,
    errors:[]
}