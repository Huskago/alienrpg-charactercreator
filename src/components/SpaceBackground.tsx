import { useEffect } from 'react';

export const SpaceBackground = () => {
    useEffect(() => {
        const moveStars = () => {
            const stars = document.getElementsByClassName('star');

            const moveStar = (star: HTMLElement) => {
                const speed = 0.002;
                const starSize = 2;

                const currentX = parseFloat(star.dataset.x || '0');
                const newX = currentX - speed;

                if (newX < -starSize) {
                    star.style.left = '100%';
                    star.dataset.x = '100';
                } else {
                    star.style.left = `${newX}%`;
                    star.dataset.x = newX.toString();
                }
            };

            const animateStars = () => {
                for (let i = 0; i < stars.length; i++) {
                    moveStar(stars[i] as HTMLElement);
                }
                requestAnimationFrame(animateStars);
            };

            animateStars();
        };

        moveStars();
    }, []);

    return (
        <div className="space-background">
            <div className="stars-container">
                {[...Array(50)].map((_, index) => (
                    <div
                        key={index}
                        className="star"
                        style={{
                            top: `${Math.random() * 100}vh`,
                            left: `${Math.random() * 100}vw`,
                        }}
                        data-x={Math.random() * 100}
                    />
                ))}
            </div>
        </div>
    );
};
