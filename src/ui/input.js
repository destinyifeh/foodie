import {TextInput} from 'react-native';

const Input = ({style}) => {
  return (
    <TextInput
      style={{
        borderRadius: 10,
        borderWidth: 1,
        alignSelf: 'center',
        ...style,
      }}
    />
  );
};

export {Input};
