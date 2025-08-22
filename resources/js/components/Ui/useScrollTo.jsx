import { useCallback } from "react";

export const useScrollTo = () => {
    return useCallback((id, offset = 0) => {
        const element = document.getElementById(id);
        if (element) {
            const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }, []);
};
