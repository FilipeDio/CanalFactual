import { StyledInput,SearchContainer } from "./SearchContainer.styled";

export const SearchInput = () => {
    return (
        <SearchContainer>
            <svg width="40" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 0C3.364 0 0 3.364 0 7.5S3.364 15 7.5 15c1.888 0 3.61-.708 4.93-1.863l6.716 6.717a.5.5 0 1 0 .708-.708l-6.717-6.716A7.459 7.459 0 0 0 15 7.5C15 3.364 11.636 0 7.5 0zm0 1C11.096 1 14 3.904 14 7.5S11.096 14 7.5 14A6.492 6.492 0 0 1 1 7.5C1 3.904 3.904 1 7.5 1z" fill="#222"/>
</svg>
            <StyledInput type="text" placeholder="Pesquisar..." />
        </SearchContainer>
    );
};
