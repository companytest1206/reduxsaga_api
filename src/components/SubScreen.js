import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { request } from './../store/action';

class SubScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.loading();
        // // alert(this.props.idDrink);
    }

    UNSAFE_componentWillReceiveProps(p) {
        // alert(JSON.stringify(p));
    }

    render() {
        return(
          <View>
            <Text>Dub-Smez</Text>
            <Text>id: {this.props.idDrink}</Text>
            <Text>name: {this.props.strDrink}</Text>
            <Text>error: {this.props.error}</Text>
            <Text>loading: {this.props.loading}</Text>
            <Text>success: {this.props.success}</Text>
            <TouchableOpacity
              style={{ padding: 10, backgroundColor: 'gold', margin: 18 }}
              onPress={() => {
                this.props.reload();
              }}
            >
                <Text>
                    Renew The Data
                </Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const mapStateToProps = state => (
    {
        // idDrink: state.user.idDrink,
        // strDrink: state.user.strDrink,
        // error: state.user.error,
        // loading: state.user.loading,
        // success: state.user.success
    }
);

const mapDispatchToProps = dispatch => (
    {
        // reload: () => dispatch(request()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(SubScreen);
