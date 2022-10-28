import { FC } from "react";

import Animate from "./Animate";

interface SectionProps {
  id: string;
  heading: string;
  subHeading: string;
}

export const SectionDivider = () => <hr className="border-0 border-b border-lighten-0.025" />;

const Section: FC<SectionProps> = ({ children, id, heading, subHeading }) => (
  <section className="mt-16 mb-24" id={id}>
    <Animate variant="fade-right">
      <h3 className="text-lg font-medium text-primary font-code capitalize aos-init aos-animate">{heading}</h3>
    </Animate>
    <Animate variant="fade-up">
      <h2 className="text-2xl font-bold mt-1">{subHeading}</h2>
    </Animate>
    {children}
  </section>
);

export default Section;
