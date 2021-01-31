import styled from "styled-components";

const Wrapper = styled.div`
  .contact-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  .contact-form__title {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.63;
    color: #008080;
    margin-bottom: 20px;
  }
  .contact-form__imput {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.63;
    color: #008080;

    width: 400px;
    border: 1px solid #696969;
    border-radius: 4px;
    padding: 10px 15px;
    margin-top: 5px;
  }
  .contact-form__btn {
    display: inline-block;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.63;
    color: #008080;
    width: 100px;
    padding: 7px 10px;
    background-color: #ffdab9;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    outline: none;
  }
  .contact-form__btn:hover {
    color: #fff;
    background-color: #dda0dd;
    box-shadow: 7px 7px 12px 3px rgba(0, 0, 0, 0.42);
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default Wrapper;
