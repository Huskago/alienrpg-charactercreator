import { SpaceBackgroundAnimation } from './utils/SpaceBackgroundAnimation.tsx';

export const SpaceBackground = () => {
    return (
        <div className={"fixed top-0 left-0 w-full h-full bg-black overflow-hidden"}>
            <SpaceBackgroundAnimation />
        </div>
    );
};