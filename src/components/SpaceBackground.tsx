import React, { useState, useEffect } from 'react';

interface SpaceBackgroundProps {
    starSpeed: number;
    starSize: number;
}

interface Star {
    left: number;
    top: number;
}

export const SpaceBackground: React.FC<SpaceBackgroundProps> = ({ starSpeed, starSize }) => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const updateStars = () => {
            setStars(prevStars => {
                const updatedStars = prevStars.map(star => ({
                    left: star.left - starSpeed,
                    top: star.top,
                })).filter(star  => star.left + starSize > 0);

                const numNewStars = Math.floor(window.innerWidth / 50) - updatedStars.length;
                const newStars = Array.from({ length: numNewStars }, () => ({
                    left: window.innerWidth,
                    top: Math.floor(Math.random() * window.innerHeight),
                }));

                return [...updatedStars, ...newStars];
            });
        };

        const generateStars = () => {
            const numStars = Math.floor(window.innerWidth / 50);

            const newStars = Array.from({ length: numStars }, () => ({
                left: Math.floor(Math.random() * window.innerWidth),
                top: Math.floor(Math.random() * window.innerHeight),
            }));

            setStars(newStars);
        };

        generateStars();
        const interval = setInterval(updateStars, 50);

        return () => clearInterval(interval);
    }, [starSize, starSpeed]);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
            }}
        >
            {stars.map((star, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        left: star.left,
                        top: star.top,
                        width: starSize,
                        height: starSize,
                        backgroundColor: 'white',
                    }}
                />
            ))}
        </div>
    );
};