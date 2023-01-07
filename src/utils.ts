import omit from "lodash/omit";

/**
 * @param {Object} obj Any object you want to exclude keys from
 * @param {string[]} omitKeyPaths The keys you want to exclude from the object
 * @returns {Object} Returns the original object, less the keys instructed to omit
 * @private
 */
export function omitKeys<
    T extends Record<keyof any, any>,
    K extends Array<keyof T> | Array<keyof T | string>[],
>(obj: T, ...omitKeyPaths: K): Omit<T, Extract<K, keyof T>> {
    return omit(obj, ...omitKeyPaths) as any;
}