import styled from 'styled-components';


const ButtonBase = styled.button`
    box-shadow:0 0 3px 1px grey;
    padding:0.5rem 1rem;
    color:grey;
    background-color: transparent;
    border:none;
    border-radius: 4px;
    color:grey;
`

const ProviderButton = styled.button`
    box-shadow:0 0 3px 1px grey;
    padding:0.5rem 1rem;
    color:grey;
    background-color: transparent;
    border:none;
    border-radius: 4px;
    color:grey;
    display:flex;
    justify-content: center;
    align-items:center;
    gap:0.3rem;

     img{
         vertical-align: baseline;
         margin-right:0.4rem;
     }

`
 
 

export {ButtonBase, ProviderButton}