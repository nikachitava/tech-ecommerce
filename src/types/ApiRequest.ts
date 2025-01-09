export interface ApiError {
	message: string;
	status: number;
	code?: string;
}

export interface ApiResponse<T> {
	data: T;
	meta?: {
		total: number;
		page: number;
		limit: number;
	};
}
