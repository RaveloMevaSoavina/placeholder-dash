import styled from 'styled-components'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <List>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
    margin-bottom : 25px; 
`

const List = styled.ul`
    list-style-type : none;
    display : flex;
    flex-direction : row;
    justify-content: center;
    width : 100%;
    
    li{
        padding : 5px 10px;
        border-width: 1px 1px 0 0;
        cursor : pointer;
        &:hover{
            font-size : 18px;
        }
    }
`