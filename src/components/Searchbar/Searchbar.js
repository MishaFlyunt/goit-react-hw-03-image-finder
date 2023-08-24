import { FcSearch } from 'react-icons/fc';

import {
  SearchbarForm,
  SearchForm,
  SearchFormInput,
  ButtonStyled,
} from './Searchbar.styled';

export const Searchbar = ({ submit }) => {
  return (
    <SearchbarForm>
      <SearchForm onSubmit={submit}>
        <ButtonStyled>
          <FcSearch size={36} />
        </ButtonStyled>
        <SearchFormInput
          type="text"
          name="query"
          placeholder="Search images and photos"
          autoFocus
        />
      </SearchForm>
    </SearchbarForm>
  );
};
