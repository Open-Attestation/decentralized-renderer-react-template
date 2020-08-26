import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CustomTemplateCertificate } from "../sample";
import { PrintWatermark } from "../../core/PrintWatermark";
import { QrCode } from "../../core/QrCode";

const style = css`
  position: relative;
  pre {
    background-color: lightgray;
    overflow-wrap: anywhere;
    white-space: break-spaces;
  }

  .A4 {
    height: 205mm;
    width: 297mm;
  }

  @page {
    size: A4 landscape;
    margin: 0;
  }
`;

export const CustomTemplate: FunctionComponent<TemplateProps<CustomTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  const qrCodeUrl = document?.links?.self.href;
  return (
    <div css={style} className={className} id="custom-template">
      <PrintWatermark />
      <div className="A4">
        <h1>{document?.foo?.title ?? "Default title"}</h1>
        <pre>{JSON.stringify(document, null, 2)}</pre>
      </div>
      <div className="A4">{qrCodeUrl && <QrCode url={qrCodeUrl} />}</div>
    </div>
  );
};
