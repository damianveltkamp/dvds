import { SC_SkipToContent } from "./SkipToContent.styles";

export type SkipToContentProps = {
  skipId: string;
  text: string;
};

export const SkipToContent = ({ skipId, text }: SkipToContentProps) => {
  return <SC_SkipToContent href={skipId}>{text}</SC_SkipToContent>;
};
