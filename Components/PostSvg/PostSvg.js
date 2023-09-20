import Svg, { Path, Rect } from "react-native-svg";

const PostSvg = (props) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 3H10V10H3V3Z"
        stroke="#212121"
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 3H21V10H14V3Z"
        stroke="#212121"
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 14H21V21H14V14Z"
        stroke="#212121"
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 14H10V21H3V14Z"
        stroke="#212121"
        stroke-opacity="0.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      />
    </Svg>
  );
};

export default PostSvg;
