import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  width: 100vw;
`;
const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledLabel = styled.label`
  margin-bottom: 0.6rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
`;
const StyledInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem 1.4rem;
`;
const StyledButton = styled.button``;
const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 2rem;
`;
const StyledFlag = styled.img`
  width: 24px;
  height: auto;
`;
function App() {
  const [receiptId, setReceiptId] = useState("");

  async function handleSubmit() {
    const receipt = receiptId.toUpperCase();
    const redirectLink = `https://apps.cbe.com.et:100/?id=${receipt}`;
    // const res = await fetch(`https://apps.cbe.com.et:100/?id=${receipt}`);
    // const data = res.json();
    // console.log(data);

    const newTab = window.open(redirectLink, "_blank");
    newTab.focus();
  }

  return (
    <>
      <Container>
        <StyledInputBox>
          <StyledLabel className="" htmlFor="receiptId">
            Enter Transaction ID
          </StyledLabel>
          <StyledInput
            className=""
            placeholder="FT24*******"
            id="receiptId"
            type="text"
            value={receiptId}
            onChange={(e) => setReceiptId(e.target.value)}
          />
          <StyledButton onClick={handleSubmit}>Check transaction</StyledButton>
        </StyledInputBox>
      </Container>
      <StyledFooter>
        Made By{" "}
        <span>
          <StyledFlag src="/et.png" alt="ethiopian flag" />
        </span>{" "}
        Netsa Apps
      </StyledFooter>
    </>
  );
}

export default App;
