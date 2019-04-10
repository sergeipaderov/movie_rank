// @flow

import React, { Component } from 'react'
import { ContentWrapper, Subtitle } from './styled'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import debounce from 'lodash/debounce'
import Header from '../../components/Header'
import SearchInput from '../../components/SearchInput'
import InitialMain from '../../components/InitialMain'
import ResultMain from '../../components/ResultMain'
import { requestApiData, enterRequestText } from '../../store/actions'

type Props = {
  navigation: Object,
  results: Array<Object>,
  enterRequestText: Function
}

type State = {
  searchString: String,
}

class HomeScreen extends Component<Props, State> {

  static navigationOptions = {
    header: null,
  }

  state = {
    searchString: '',
  }

  handleOnChange = debounce((text) => {
    const { enterRequestText: requestText } = this.props

    this.setState({ searchString: text })
    requestText(text)
  }, 500)

  componentDidMount() {
    const { searchString } = this.state

    requestApiData(searchString)
  }

  render() {
    const { results, navigation } = this.props

    return (
      <ContentWrapper>
        <Header />
        <SearchInput
          onChangeText={this.handleOnChange}
          placeholder='Search movies'
        />
        <Subtitle>All Movies</Subtitle>
        {results.Search && results.Search.length
          ? <ResultMain data={results.Search} navigation={navigation} />
          : <InitialMain />
        }
      </ContentWrapper>
    )
  }

}

const mapStateToProps = state => ({ results: state.data })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, enterRequestText }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
