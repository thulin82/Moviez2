import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderMark,
} from "@chakra-ui/react";
import { useState } from "react";
import "./Slider.css";

const Slider2 = () => {
    const [sliderValue, setSliderValue] = useState([60, 120]);
    return (
        <div className="slider">
            <label>Runtime</label>

            <RangeSlider
                defaultValue={[60, 120]}
                min={0}
                max={300}
                onChange={(val) => setSliderValue(val)}
                onChangeEnd={(val2) => console.log(val2)}
            >
                <RangeSliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
                    0
                </RangeSliderMark>
                <RangeSliderMark value={300} mt="1" ml="-2.5" fontSize="sm">
                    300
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

export default Slider2;
