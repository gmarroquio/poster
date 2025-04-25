import {
  type OptionalRestArgsOrSkip,
  useQuery as useConvexQuery,
} from "convex/react";
import { type FunctionReference } from "convex/server";
import { useEffect, useState } from "react";

export function useQuery<Query extends FunctionReference<"query">>(
  api: Query,
  ...args: OptionalRestArgsOrSkip<Query>
) {
  let data = undefined;
  let error = undefined;
  try {
    data = useConvexQuery(api, ...args);
  } catch (e) {
    error = e;
  }
  const [pending, setPending] = useState(true);

  useEffect(() => {
    if (data) setPending(false);
    else setPending(true);
  }, [data]);

  return { pending, data, error } as
    | { pending: true; data: undefined; error: undefined }
    | { pending: false; data: undefined; error: Error }
    | { pending: false; data: Query["_returnType"]; error: undefined };
}
