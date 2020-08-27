import { QueryInput } from "@urql/exchange-graphcache";

export function betterUpdateQuery<Result, Query>(
  cache: any,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data: any) => fn(result, data as any) as any);
}
