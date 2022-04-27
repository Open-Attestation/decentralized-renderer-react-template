import { v2 } from "@govtechsg/open-attestation";

export interface CoveringLetter extends v2.OpenAttestationDocument {
  name: string;
  logo?: string;
  title?: string;
  remarks?: string;
  titleColor?: string;
  backgroundColor?: string;
  remarksColor?: string;
  links?: {
    self: {
      href: string;
    };
  };
}
