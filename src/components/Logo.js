import { MdOutlinePhoneAndroid } from "react-icons/md";

import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <h3>
        Digital
        <MdOutlinePhoneAndroid />
        <span>Dynamo</span>
      </h3>
    </Wrapper>
  );
};
export default Logo;

const Wrapper = styled.div`
  h3 {
    color: var(--clr-grey-2);

    span {
      color: var(--clr-primary-6);
    }
  }
`;
