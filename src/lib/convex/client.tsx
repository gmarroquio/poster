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
  const data = useConvexQuery(api, ...args);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    if (data) setPending(false);
    else setPending(true);
  }, [data]);

  return { pending, data };
}
