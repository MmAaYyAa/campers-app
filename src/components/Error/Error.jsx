
import {Text, ErrorBox, ErrorMessage} from './Error.styled';
export default function Error() {
    return (
      <ErrorBox>
        <ErrorMessage>
          <Text>Ooops... Something went wrong! Try to reload this page</Text>
        </ErrorMessage>
      </ErrorBox>
    );
  }