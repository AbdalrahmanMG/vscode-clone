interface IProps {
  src: string | undefined;
  className?: string
}

const IconImg = ({src, className}: IProps) => {
return  <img src={src} width={20} height={20} alt="" className={className} />;
};

export default IconImg;
