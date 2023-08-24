import { ThreeDots } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <ThreeDots
        height="120"
        width="120"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </LoaderStyled>
  );
};
