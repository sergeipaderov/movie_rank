// @flow

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestDetailsData } from '../../store/actions'
import {
  ArrowBack,
  Favorite,
  ContentWrapper,
  CoverContainer,
  MovieCover,
  DescriptionContainer,
  HeaderDescription,
  HeaderInfo,
  HeaderInfoItem,
  InfoIcon,
  InfoValue,
  MovieTitle,
  MainDescription,
  ItemContainer,
  ItemTitle,
  ItemDescription,
} from './styled'
import starIcon from '../../assets/Icons/star.png'
import clockIcon from '../../assets/Icons/clock.png'
import filmIcon from '../../assets/Icons/film.png'

type Props = {
  navigation: Object,
  movieDetails: Object,
  requestDetailsData: Object,
}

type State = {
  movieDetails: Object,
  isFavorite: Boolean,
}

class DetailsScreen extends Component<Props, State> {

  static navigationOptions = {
    header: null,
  }

  state = {
    isFavorite: false,
  }

  componentDidMount() {
    const { navigation, requestDetailsData: requestDetails } = this.props
    const movie = navigation.getParam('data')

    requestDetails(movie.imdbID)
  }

  handleOnPress = () => {
    this.setState(prevState => ({
      isFavorite: !prevState.isFavorite,
    }))
  }

  render() {
    const { navigation, movieDetails } = this.props
    const { isFavorite } = this.state

    return (
      <ContentWrapper>
        <CoverContainer>
          <MovieCover source={{ uri: movieDetails.Poster }} />
        </CoverContainer>
        <DescriptionContainer>
          <HeaderDescription>
            <MovieTitle>{movieDetails.Title}</MovieTitle>
            <HeaderInfo>
              <HeaderInfoItem>
                <InfoIcon source={starIcon} />
                <InfoValue>{movieDetails.imdbRating}</InfoValue>
              </HeaderInfoItem>
              <HeaderInfoItem>
                <InfoIcon source={clockIcon} />
                <InfoValue>{movieDetails.Runtime}</InfoValue>
              </HeaderInfoItem>
              <HeaderInfoItem>
                <InfoIcon source={filmIcon} />
                <InfoValue>{movieDetails.Year}</InfoValue>
              </HeaderInfoItem>
            </HeaderInfo>
          </HeaderDescription>
          <MainDescription>
            <ItemContainer>
              <ItemTitle>Plot</ItemTitle>
              <ItemDescription>{movieDetails.Plot}</ItemDescription>
            </ItemContainer>
            <ItemContainer>
              <ItemTitle>Cast</ItemTitle>
              <ItemDescription>{movieDetails.Actors}</ItemDescription>
            </ItemContainer>
            <ItemContainer>
              <ItemTitle>Genre</ItemTitle>
              <ItemDescription>{movieDetails.Genre}</ItemDescription>
            </ItemContainer>
            <ItemContainer>
              <ItemTitle>Director</ItemTitle>
              <ItemDescription>{movieDetails.Director}</ItemDescription>
            </ItemContainer>
          </MainDescription>
        </DescriptionContainer>
        <ArrowBack onPress={() => navigation.goBack()} />
        <Favorite onPress={this.handleOnPress} isFavorite={isFavorite} />
      </ContentWrapper>
    )
  }

}

const mapStateToProps = state => ({ movieDetails: state.details })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestDetailsData }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen)
