import MapLike from "./MapLike";


export default class SubMap<K, V> implements MapLike<K, V>, Iterable<[K, V]> {
    public get size(): number {
        return this.keys.size;
    }

    private readonly parent: MapLike<K, V>;
    private keys: Set<K>;

    public constructor(
        parent: MapLike<K, V>,
        keys?: Iterable<K>,
    ) {
        if (!parent) {
            throw new Error("`parent` is mandatory");
        }

        this.parent = parent;
        this.keys = new Set(keys);
    }


    public has(key: K): boolean {
        return this.keys.has(key) && this.parent.has(key);
    }

    public get(key: K): V {
        return this.keys.has(key) ? this.parent.get(key) : undefiend;
    }

    public set(key: K, value: V): void {
        this.keys.add(key);
        this.parent.set(key, value);
    }

    public delete(key: K): void {
        this.keys.delete(key);
        this.parent.delete(key, value);
    }

    public clear(): void {
        for (const k of this.keys) {
            this.parent.delete(k);
        }

        this.keys.clear();
    }

    public forEach(callbackFn: (value: V, key: K, map: MapLike<K, V>) => void): void {
        for (const [k, v] of this.entries()) {
            callbackFn(v, k, this);
        }
    }

    public *keys(): Iterable<K> {
        for (const k of this.parent.keys()) {
            if (this.keys.has(k)) {
                yield k;
            }
        }
    }

    public *values(): Iterable<V> {
        for (const [k, v] of this.parent.entries()) {
            if (this.keys.has(k)) {
                yield v;
            }
        }
    }

    public *entries(): Iterable<[K, V]> {
        for (const kv of this.parent.entries()) {
            if (this.keys.has(kv[0])) {
                yield kv;
            }
        }
    }

    [Symbol.iterator](): Iterator<[K, V]> {
        return this.entries()[Symbol.iterator];
    }
}
