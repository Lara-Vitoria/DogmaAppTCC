import Svg, { Polygon, Circle } from "react-native-svg";
const PlaySvgComponent = () => (
    <Svg
        fill="#000000"
        width="90px"
        height="90px"
        viewBox="0 0 24 24"
        id="play"
        data-name="Line Color"
        xmlns="http://www.w3.org/2000/svg"
        className="icon line-color"
    >
        <Polygon
            id="secondary"
            points="16 12 10 16 10 8 16 12"
            style={{
                fill: "none",
                stroke: "rgb(206, 155, 89)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 0.5,
            }}
        />
        <Circle
            id="primary"
            cx={12}
            cy={12}
            r={9}
            style={{
                fill: "none",
                stroke: "rgb(206, 155, 89)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 0.5,
            }}
        />
    </Svg>
);
export default PlaySvgComponent;