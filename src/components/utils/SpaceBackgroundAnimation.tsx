import { useRef, useEffect } from 'react';

export const SpaceBackgroundAnimation = () => {
    const starsContainerRef = useRef<HTMLDivElement>(null);
    const stars = useRef<Array<HTMLElement>>([]);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useEffect(() => {
        const moveStars = () => {
            const speed = 0.002;
            const starSize = 2;

            for (let i = 0; i < stars.current.length; i++) {
                const star = stars.current[i];
                const currentX = parseFloat(star.dataset.x || '0');
                const newX = currentX - speed;

                if (newX < -starSize) {
                    star.style.left = '100%';
                    star.dataset.x = '100';
                } else {
                    star.style.left = `${newX}%`;
                    star.dataset.x = newX.toString();
                }
            }
        };

        let animationId: number | null = null;

        const animateStars = () => {
            moveStars();
            animationId = requestAnimationFrame(animateStars);
        };
        animationId = requestAnimationFrame(animateStars);
        return () => animationId && cancelAnimationFrame(animationId);
    }, []);

    useEffect(() => {
        if (!starsContainerRef.current) return;
        const starsElements = starsContainerRef.current.querySelectorAll('.star') as NodeListOf<HTMLElement>;
        stars.current = Array.from(starsElements);
    }, []);

    return (
        <div className={"relative w-full h-full backface-hidden"} ref={starsContainerRef}>
            {[...Array(50)].map((_, index) => (
                <div
                    key={index}
                    className={"w-[2px] h-[2px] bg-white fixed"}
                    style={{
                        top: `${Math.random() * 100}vh`,
                        left: `${Math.random() * 100}vw`,
                    }}
                    data-x={Math.random() * 100}
                />
            ))}
        </div>
    );
};