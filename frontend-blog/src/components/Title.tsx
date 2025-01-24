import React from "react";

interface TitleProps {
  text?: string;
  subtitle?: string;
  textColor?: string
  subHeading?: string;
  titleBorder?: string;
}

const Title: React.FC<TitleProps> = ({ text,subHeading, subtitle,textColor,titleBorder }) => {
  return (
    <div className="text-start">
      <span className="relative inline-block">
      <h1 className={`text-4xl md:text-6xl tracking-wider font-bold  font-poppins ${ textColor ? textColor : 'text-gray-800'}`}>
        {text}
      </h1>
      <small className={`${titleBorder}`}></small>
      </span>
      {subtitle && (
        <p className={`${textColor ? textColor : "text-2xl"} ${textColor ? textColor : "md:text-4xl"}  font-poppins ${textColor ? textColor : "text-gray-600 dark:text-gray-300"} mt-2`}>
          {subtitle}
        </p>
      )}
      {subHeading && (
        <p className={`text-lg  tracking-tighter md:text-2xl text-gray-600 dark:text-gray-300  ${textColor} mt-2`}>
          {subHeading}
        </p>
      )}
    </div>
  );
};

export default Title;
