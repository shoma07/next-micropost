export class HttpError extends Error {
  constructor(public status: number, public info: unknown, e?: string) {
    super(e);
  }
}
