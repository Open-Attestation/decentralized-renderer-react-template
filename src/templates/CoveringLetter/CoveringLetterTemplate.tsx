import styled from "@emotion/styled";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { CoveringLetter } from "./types";

const CustomStyles = styled.div`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  width: 100%;
  color: #4e4e50;
  min-height: 600px;

  .logo {
    max-width: 240px;
  }

  h1 {
    font-size: 32px;
  }
`;

export const CoveringLetterTemplate: FunctionComponent<TemplateProps<CoveringLetter>> = ({ document }) => {
  const { logo, title, remarks, backgroundColor, titleColor, remarksColor } = document;

  return (
    <div data-testid="covering-letter-template">
      <CustomStyles>
        <div className="p-4" style={{ backgroundColor }}>
          {logo && <img data-testid="logo" className="logo mb-8" src={logo} />}
          {title && (
            <h1 className="font-bold" style={{ color: titleColor }}>
              {title}
            </h1>
          )}
          {remarks && (
            <div className="my-4">
              <div
                className="font-bold"
                style={{
                  color: remarksColor
                }}
              >
                Remarks:
              </div>
              <div
                style={{
                  color: remarksColor
                }}
              >
                {remarks}
              </div>
            </div>
          )}
        </div>
      </CustomStyles>
    </div>
  );
};
