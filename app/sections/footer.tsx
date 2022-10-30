import { NextPage } from "next";

import Animate from "../../components/Animate";

const FooterSection: NextPage = () => (
  <Animate variant="zoom">
    <div className="flex flex-col items-center my-16">
      <p className="text-textSecondary font-code text-xs">Designed & Built by Jack Waterfall</p>
    </div>
  </Animate>
);

export default FooterSection;
