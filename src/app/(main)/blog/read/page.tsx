"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { NewColors } from "../../../../../public/styles/colors/colors";
// import "../../../../components/blog/write/style.css";

export default function BlogRead() {
  const id = useSearchParams().get("id");

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "676px",
        }}
      >
        <b
          style={{
            width: "100%",
            fontSize: "36px",
            letterSpacing: "0.8px",
            lineHeight: "48px",
            color: NewColors.white,
          }}
        >
          타이틀입니다.타이틀입니다.타이틀입니다.타이틀입니다.타이틀입니다
        </b>
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "32px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              backgroundColor: NewColors.gray11,
              width: "44px",
              height: "44px",
              borderRadius: "10000px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "16px",
                letterSpacing: "-0.02em",
                alignItems: "center",
                fontWeight: 500,
              }}
            >
              <div style={{ color: NewColors.white }}>사용자 이름</div>
              <div
                style={{
                  width: "1px",
                  backgroundColor: NewColors.weakWhite,
                  height: "10px",
                  margin: "0px 8px",
                }}
              />
              <div style={{ color: NewColors.primary }}>팔로우</div>
            </div>
            <div
              style={{
                color: NewColors.gray12,
                lineHeight: "20px",
                fontSize: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Feb 14, 2024
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "16px",
            boxSizing: "border-box",
            borderRadius: "12px",
            border: `1px solid ${NewColors.weakWhite}`,
            letterSpacing: "-0.02em",
            backgroundColor: NewColors.userCard,
            height: "58px",
            width: "100%",
            color: NewColors.gray12,
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            lineHeight: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              width: "212px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src={"/Image/watchCount.svg"}
                alt="watchCount"
                width={16}
                height={10}
                style={{
                  padding: "10px",
                }}
              />
              <div style={{ color: NewColors.gray12 }}>999K</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src={"/Image/ddabong.svg"}
                alt="watchCount"
                width={16}
                height={10}
                style={{
                  padding: "10px",
                }}
              />
              <div style={{ color: NewColors.gray12 }}>999K</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src={"/Image/comment.svg"}
                alt="watchCount"
                width={16}
                height={10}
                style={{
                  padding: "10px",
                }}
              />
              <div style={{ color: NewColors.gray12 }}>999K</div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Image
              src={"/Image/bookmark.svg"}
              alt="bookmark"
              width={24}
              height={24}
            />
            <Image
              src={"/Image/share.svg"}
              alt="bookmark"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div
          style={{ color: NewColors.white, marginTop: "32px" }}
          dangerouslySetInnerHTML={{
            __html:
              "<h1>테스트입니다.</h1><h2>테스트입니다.</h2><p>테스트입니다.</p>",
          }}
        ></div>
        <div style={{ color: NewColors.white }}>{id}</div>
      </div>
    </div>
  );
}
