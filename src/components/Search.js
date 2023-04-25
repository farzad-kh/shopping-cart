import React from 'react';
import styled from 'styled-components'
const Input = styled.input`
width: 300px;
padding: 0 10px;
line-height: 1.5;
height:35px

`
const SearchContainer = styled.div`

flex-wrap: wrap;
max-width: 100%;
width: 1350px;
margin: 0px auto;
  margin-top: 0px;
padding: 20px 40px 20px 40px;

margin-top: 20px;

justify-content:right;
display:flex
`
const Search = ({searchHandler,search}) => {
    return (
        <div style={{borderBottom:"1px solid #ddd"}}>
  <SearchContainer >
            <Input type='text' value={search} onChange={searchHandler} placeholder='Search Products...' />
        </SearchContainer>
        </div>
      
    );
};

export default Search;