import './slider.scss';
import {
	Box,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
} from '@chakra-ui/react';
import { AiFillCar } from 'react-icons/ai';

interface ISliderProps {
	label: string;
	min: number;
	max: number;
	value: number;
	onChange: (value: number) => void;
}

export default function CustomSlider(props: ISliderProps) {
	return (
		<div className="slider-container">
			<p>{props.label}</p>
			<div className="power">{props.value}</div>
			<Slider
				min={props.min}
				max={props.max}
				aria-label="slider-ex-4"
				defaultValue={props.value}
				onChange={(value: number) => {
					props.onChange(value);
				}}
			>
				<SliderTrack bg="red.100">
					<SliderFilledTrack bg="tomato" />
				</SliderTrack>
				<SliderThumb boxSize={6}>
					<Box color="tomato" as={AiFillCar} />
				</SliderThumb>
			</Slider>
		</div>
	);
}
