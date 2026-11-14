// Nullable Types

function toNumber(s: string  | null | undefined) {
    if(!s) {
        return 0;
    }
    return parseInt(s);
}

const n = toNumber(null);

