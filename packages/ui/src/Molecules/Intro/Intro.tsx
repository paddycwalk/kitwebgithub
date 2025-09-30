interface IntroProps {
  headline?: React.ReactNode;
  paragraph?: React.ReactNode;
  button?: React.ReactNode;
}

export const Intro = ({ headline, paragraph, button }: IntroProps) => {
  return (
    <div>
      {headline}
      {paragraph}
      {button}
    </div>
  );
};
