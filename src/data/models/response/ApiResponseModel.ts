export interface ApiResponseBaseModel {
    errors: Errors[]
    messages: Messages[]
    resultType: number
}

export interface ApiResponseModel<TResults> extends ApiResponseBaseModel {
    result: TResults
}

type Errors = {
    description: string
    errorCode: string
    objectIdentifier: string
}

type Messages = {
    description: string
    statusCode: string
    objectIdentifier: string
}