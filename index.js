export default function reversal (predicate) {
  return function reversalPredicate(anything) {
    return !predicate(anything);
  };
}
