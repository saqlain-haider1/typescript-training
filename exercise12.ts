declare module 'stats' {
    // Generic Type for comparator
    type Comparator<T> = (a: T, b: T) => number;

    // Added type for the indexes
    type GetIndex = <T>(input: T[], comparator: Comparator<T>) => number;
    export const getMaxIndex: GetIndex;
    export const getMinIndex: GetIndex;
    export const getMedianIndex: GetIndex;

    type GetElement = <T>(input: T[], comparator: Comparator<T>) => T | null;
    export const getMaxElement: GetElement;
    export const getMinElement: GetElement;
    export const getMedianElement: GetElement;

    export const getAverageValue: <T>
    (input: T[], getValue:
    (item: T) => number)
    => number | null;
}
