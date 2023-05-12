import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderMark,
} from "@chakra-ui/react";
import { useState } from "react";
import "./Slider.css";

const Slider = (props) => {
    const { min, max, step, value, label } = props.data;
    const [sliderValue, setSliderValue] = useState([value.min, value.max]);

    const onChange = (event) => {
        const range = {
            min: Number(event[0]),
            max: Number(event[1]),
            value: {
                min: Number(event[0]),
                max: Number(event[1]),
            },
        };
        props.onChange({
            type: label,
            value: range,
        });
    };

    return (
        <div className="slider">
            <label>{label}</label>

            <RangeSlider
                defaultValue={[value.min, value.max]}
                min={min}
                max={max}
                step={step}
                onChange={(val) => setSliderValue(val)}
                onChangeEnd={onChange}
            >
                <RangeSliderMark value={min} mt="1" ml="-2.5" fontSize="sm">
                    {min}
                </RangeSliderMark>
                <RangeSliderMark value={max} mt="1" ml="-2.5" fontSize="sm">
                    {max}
                </RangeSliderMark>
                <RangeSliderMark
                    value={sliderValue[0]}
                    textAlign="center"
                    fontSize="smaller"
                    bg="orange.500"
                    color="white"
                    mt="-8"
                    ml="-5"
                    w="8"
                >
                    {sliderValue[0]}
                </RangeSliderMark>
                <RangeSliderMark
                    value={sliderValue[1]}
                    textAlign="center"
                    fontSize="smaller"
                    bg="orange.500"
                    color="white"
                    mt="-8"
                    ml="-5"
                    w="8"
                >
                    {sliderValue[1]}
                </RangeSliderMark>
                <RangeSliderTrack bg="lightgrey">
                    <RangeSliderFilledTrack bg="orange.500" />
                </RangeSliderTrack>
                <RangeSliderThumb bg="orange.500" boxSize={4} index={0} />
                <RangeSliderThumb bg="orange.500" boxSize={4} index={1} />
            </RangeSlider>
        </div>
    );
};

export default Slider;
