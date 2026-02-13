'use client';

import Beams from '@/components/Beams';

export const HomeBeamsBackground = () => {
	return (
		<div className="absolute inset-0 -z-10 block w-full">
			<Beams
				beamWidth={3}
				beamHeight={30}
				beamNumber={30}
				lightColor="#ffffff"
				speed={2}
				noiseIntensity={2}
				scale={0.2}
				rotation={30}
			/>
		</div>
	);
};
