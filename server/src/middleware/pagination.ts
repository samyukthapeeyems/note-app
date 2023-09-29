import { Request, Response, NextFunction } from 'express';

interface RequestParams {}

interface ResponseBody {}

interface RequestBody {}

interface RequestQuery {
    page?: number;
    limit?: number;
}


export type CRequest = Request<RequestParams, ResponseBody, RequestBody, RequestQuery> & {
    skip?: number | undefined;
    offset?: number | undefined;
};

export const paginate = (limit: number, maxLimit: number) => {
  const _limit: number = typeof limit === 'number' ? parseInt(limit.toString(), 10) : 10;
  const _maxLimit: number = typeof maxLimit === 'number' ? parseInt(maxLimit.toString(), 10) : 50;

  return (req: CRequest, res: Response, next: NextFunction) => {
    req.query.page = typeof req.query.page === 'string' ? parseInt(req.query.page, 10) || 1 : 1;
    req.query.limit = typeof req.query.limit === 'string' ? parseInt(req.query.limit, 10) || 0 : _limit;

    if (req.query.limit > _maxLimit) req.query.limit = _maxLimit;
    if (req.query.page < 1) req.query.page = 1;
    if (req.query.limit < 0) req.query.limit = 0;

    req.skip = req.offset = (req.query.page * req.query.limit)  - req.query.limit;

    next();
  };
};
