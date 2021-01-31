import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  .filter-form {
    display: flex;

    flex-direction: column;
    margin-bottom: 30px;
  }
  .filter-form__title {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.63;
    //color: #212121;
    color: #008080;
  }
  .filter-form__imput {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.63;
    color: #008080;

    width: 400px;
    border: 1px solid #696969;
    border-radius: 4px;
    padding: 5px 15px;
    margin-top: 5px;
  }
`;

export default Wrapper;
