
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProps {
content: string
}

const OpenedFileContent = ({content}: IProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomOneLight}
    showLineNumbers 
    customStyle={{
        width: '100%',
        // height: '100vh'
    }}>
    {String(content)}
  </SyntaxHighlighter>
  )
}

export default OpenedFileContent