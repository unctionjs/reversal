import {PredicateFunctionType} from "./types";

export default function reversal<A> (predicate: PredicateFunctionType<A>) {
  return function reversalPredicate (anything: A): boolean {
    return !predicate(anything);
  };
}
