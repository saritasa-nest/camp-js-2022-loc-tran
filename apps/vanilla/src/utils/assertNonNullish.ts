/**
 * Check for null or undefined element.
 * @param value Optional type of value.
 */
export function assertNonNullish<T>(value: T): asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(
      `Expected 'element' to be defined, but received ${value}`,
    );
  }
}
