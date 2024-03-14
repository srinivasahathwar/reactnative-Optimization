import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';

class MyPureComponent extends PureComponent {
  render() {
    const { text, onPress } = this.props;
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>{text}</Text>
        <Button title="Click me" onPress={onPress} />
      </View>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handlePress = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Counter: {this.state.count}</Text>
        <MyPureComponent text="I'm a PureComponent" onPress={this.handlePress} />
      </View>
    );
  }
}

export default App;