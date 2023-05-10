import {View} from 'react-native';

const Card = ({children, style}) => {
  return (
    <View style={{fontSize: 18, ...style}}>
      <CardBody></CardBody>
    </View>
  );
};

const CardBody = ({children, style}) => {
  return <View style={{fontSize: 18, ...style}}></View>;
};

const CardHeader = ({children, style}) => {
  return <View style={{fontSize: 18, ...style}}></View>;
};

const CardFooter = ({children, style}) => {
  return <View style={{fontSize: 18, ...style}}></View>;
};

const CardTitle = ({children, style}) => {
  return <View style={{fontSize: 18, ...style}}></View>;
};

const CardText = ({children, style}) => {
  return <View style={{fontSize: 18, ...style}}></View>;
};

export {Card, CardBody, CardFooter, CardHeader, CardText, CardTitle};
