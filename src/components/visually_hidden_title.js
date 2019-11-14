import styled from 'styled-components';

/** Visually hidden components cannot be seen in the browser, but they are still detectable by screen readers.
 * They are used here to add semantically important elements that were not originally in the UI.
 */
const VisuallyHiddenTitle = styled.h1`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export default VisuallyHiddenTitle;