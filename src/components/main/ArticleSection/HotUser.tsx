import { Spacer } from "@/components/common/spacer";
import { NewColors } from "../../../../public/styles/colors/colors";

export const HotUser = ({ author }: { author: string }) => {
  return (
    <div
      style={{
        width: "160px",
        height: "200px",
        backgroundColor: NewColors.mainBlack,
        alignItems: "center",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "30px",
          backgroundColor: NewColors.gray5,
        }}
      ></div>
      <Spacer shape={"height"} size={"6px"} />
      <div>{author}</div>
      <Spacer shape={"height"} size={"4px"} />
      <div>스타트업·UX디자이너</div>
      <Spacer shape={"height"} size={"9px"} />
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: NewColors.mainRed,
          fontSize: "15px",
          fontWeight: "700",
        }}
      >
        팔로우
      </button>
    </div>
  );
};