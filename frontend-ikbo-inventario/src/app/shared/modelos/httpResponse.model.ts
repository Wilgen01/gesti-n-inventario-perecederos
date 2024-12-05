export interface HttpResponse<T> {
    message: string;
    error: string
    data: T;
}