import { DOMAttributes } from "react";

interface IProps extends DOMAttributes<HTMLImageElement> {
  src: string | undefined;
  className?: string
}

const IconImg = ({src, className, ...rest}: IProps) => {
return  <img src={src} width={20} height={20} alt="" {...rest} className={className} />;
};

export default IconImg;
