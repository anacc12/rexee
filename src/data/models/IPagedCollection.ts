export interface IPagedCollection<TItem> {
	items: TItem[];
	hasNextPage: boolean;
	pageNumber: number;
	pageCount: number;
	pageSize: number;
	searchQuery?: string;
	orderBy?: string;
	orderDirection?: 'asc' | 'desc';
	totalRecords: number
}