import { useState } from "react";
import styled from "styled-components";

const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
  transform: translate(50%, -50%);
`;
const StyledLabel = styled.label`
  margin-bottom: 0.6rem;
`;
const StyledInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem 1.4rem;
`;
const StyledButton = styled.button``;
function App() {
  const [receiptId, setReceiptId] = useState("");

  function handleSubmit() {
    const receipt = receiptId.toUpperCase();
    const redirectLink = `https://apps.cbe.com.et:100/?id=${receipt}`;

    window.open(redirectLink);
    setReceiptId("");
  }

  return (
    <StyledInputBox>
      <StyledLabel className="" htmlFor="receiptId">
        Enter Receipt ID starting with FT
      </StyledLabel>
      <StyledInput
        className=""
        placeholder="Enter Receipt Number"
        id="receiptId"
        type="text"
        value={receiptId}
        onChange={(e) => setReceiptId(e.target.value)}
      />
      <StyledButton onClick={handleSubmit}>Check transaction</StyledButton>
    </StyledInputBox>
  );
}

export default App;
