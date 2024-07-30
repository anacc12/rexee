export interface IFilter {
    pageNumber: number
    pageSize: number
    query?: string
    orderBy?: string
    limit?: number
    include?: string
}