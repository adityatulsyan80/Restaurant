import React from 'react';
import styled from 'styled-components';

// Define the StickyElement styled component
const StickyElement = styled.div`
  position: sticky;
  padding-top: 125px;
`;

const YourComponent: React.FC = () => {
  return (
    <div>
      <StickyElement>
        {<iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/1ed35bcd-9c6e-4204-b82f-60def289b6f5"></iframe>}
      </StickyElement>
    </div>
  );
};

export default YourComponent;
