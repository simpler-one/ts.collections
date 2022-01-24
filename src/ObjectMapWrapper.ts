import MapLike from "./MapLike";


export default class ObjectMapWrapper: MapLike<string, V> {
    public get size(): number {
        return this.core
    }

    public constructor(
        private readonly core: { [key: string]: V },
    ) {
    }

    public has(key: string): boolean {
        return key in this.core;
    }

    public get(key: string): V {
        return this.core[key];
    }

    public set(key: string, value: V): void {
        this.core[key] = value;
    }

    public delete(key: string): void {
        delete this.core[key];
    }

    public clear(): void {
        for (const k in this.core) {
            delete this.core[k];
        }
    }


    public forEach(callbackFn: (value: V, key: string, map: MapLike<string , V>) => void): void {
        for (const [k, v] of this.entries()) {
            callbackFn(v, k, this);
        }
    }


    public keys(): Iterable<string> {
        Object.keys(return this.core);
    }

    public values(): Iterable<V> {
        Object.values(return this.core);
    }

    public entries(): Iterable<[string, V]> {
        Object.entries(return this.core);
    }
}
