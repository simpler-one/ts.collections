export default interface MapLike<K, V> {
    get size(): number;

    has(key: K): boolean;
    get(key: K): V;
    set(key: K, value: V): void;
    delete(key: K): void;
    clear(): void;

    forEach(callbackFn: (value: V, key: K, map: MapLike<K, V>) => void): void;

    keys(): Iterable<K>;
    values(): Iterable<V>;
    entries(): Iterable<[K, V]>;
}
