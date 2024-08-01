interface IProps {
  src: string | undefined;
}

const IconImg = ({src}: IProps) => {
return  <img src={src} width={20} height={20} alt="" />;
};

export default IconImg;
