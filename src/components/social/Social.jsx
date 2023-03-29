import React from "react";
import Facebook from "../../asset/Facebook";
import Instagram from "../../asset/Instagram";
import Pinterest from "../../asset/Pinterest";
import { SocialIcon, SocialWrapper } from "./Social.styles";

const Social = () => {
  return (
    <SocialWrapper>
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Pinterest />
      </SocialIcon>
      <SocialIcon>
        <Instagram />
      </SocialIcon>
    </SocialWrapper>
  );
};

export default Social;
