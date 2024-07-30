export interface IRequestOptions {
	/**
	 * Used for aborting API request. Mandatory in order to prevent memory leaks
	 */
	abortController: AbortController;
}