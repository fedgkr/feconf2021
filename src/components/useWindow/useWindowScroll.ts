import { useCallback, useEffect, useState } from "react";

export function useScrollEffect(callback: any) {
    const onScroll = useCallback(callback, []);

    useEffect(() => {
        onScroll();
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
}