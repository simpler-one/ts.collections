export default interface MapLike<K, V> {
    has(key: K): boolean;
    get(key: K): V;
    set(key: K, value: V): void;
    delete(key: K): void;
    clear(): void;

    keys(): Iterable<K>;
    values(): Iterable<V>;
    entries(): Iterable<[K, V]>;
}
