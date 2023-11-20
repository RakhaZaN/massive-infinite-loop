import styled from "styled-components";

const StyledNavbar = styled.div`
    background-color: #2580B5;
    padding: 1rem;
    color: #fff;

  .navbar {
    display: flex;
    flex-direction: column;
  }
  
  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  
  li {
    margin-bottom: 1rem;
    
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {
    .navbar {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  
    h1 {
      margin-bottom: 0;
    }
  
    ul {
      flex-direction: row;
    }
  
    li {
      margin: 0 1rem;
    }
  }

  .navbar ul li a.active {
  /* Tambahkan gaya yang ingin Anda terapkan pada tautan yang aktif di sini */
  font-weight: bold;
  color: #70B8E3; /* Misalnya, ubah warna teks */
  /* Atau efek visual lainnya */
}
  
  /* Large Screen */
  @media (min-width: 992px) {
    /* 
     * Nothing TODO HERE.
     * We haven't styling Navbar.
     */
  }
`
export default StyledNavbar;