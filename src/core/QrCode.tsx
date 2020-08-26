import React, { FunctionComponent } from "react";
import { css } from "@emotion/core";

interface QrCode {
  url: string;
  size?: number;
}

export const QrCode: FunctionComponent<QrCode> = ({ url, size = 100 }) => (
  <div
    css={css`
      display: none;
      height: 100%;

      @media print {
        display: flex;
        .conatiner {
          display: flex;
          flex-direction: column-reverse;
        }
      }
    `}
  >
    <div className="conatiner">
      <img src={`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${url}`} alt="qr-code" />
    </div>
  </div>
);
