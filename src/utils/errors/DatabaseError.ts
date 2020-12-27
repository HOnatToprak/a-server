export class DatabaseError extends Error {
    constructor(...params: any[]) {
        super(...params);
        Error.captureStackTrace(this, DatabaseError);
        this.name = "DatabaseError"
    }
}
