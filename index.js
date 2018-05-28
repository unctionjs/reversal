export default function reversal (predicate: PredicateFunctionType): PredicateFunctionType {
  return function reversalPredicate (anything: mixed): boolean {
    return !predicate(anything)
  }
}
