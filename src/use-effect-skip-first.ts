import {type DependencyList, type EffectCallback, useEffect, useRef} from "react";

export const useEffectSkipFirst = (effect: EffectCallback, deps?: DependencyList) => {
    const first = useRef(Boolean(deps?.length));

    useEffect(() => {
        if (first.current) {
            first.current = false;
            return;
        }

        return effect();
    }, deps);
}
