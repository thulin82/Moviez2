import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./Slider.css";

const Slider = (props) => {
    const { min, max, step, value, label } = props.data;

    const onChange = (event) => {
        const range = {
            min: Number(event.min),
            max: Number(event.max),
            value: {
                min: Number(event.min),
                max: Number(event.max),
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
            <InputRange
                minValue={min}
                maxValue={max}
                step={step}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default Slider;
