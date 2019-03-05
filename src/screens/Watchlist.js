import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Text } from 'grommet'
import Carousel from 'nuka-carousel'
import JobCard from '../components/JobCard'
import { setWatchlistIndex } from '../redux/actions/app'

class Watchlist extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    firebase: PropTypes.object.isRequired
  }

  state = {
    numberOfSlidesRendered: 0,
    numberOfSlidesInWatchlist: null,
    slides: []
  }

  getFiveMoreSlides = () => {
    const { watchlist } = this.props.firebase.user.preferences
    const { jobs } = this.props.firebase.database
    const { numberOfSlidesRendered } = this.state
    const arrayOfJobObjs = watchlist.map(documentId =>
      jobs.find(obj => obj.id === documentId)
    )
    // ! Will probably get an error if you reach the end of the Watchlist length
    const notCurrentlyRenderedJobs = arrayOfJobObjs.slice(
      numberOfSlidesRendered,
      numberOfSlidesRendered + 5
    )
    return notCurrentlyRenderedJobs
  }

  componentDidMount() {
    const { watchlist } = this.props.firebase.user.preferences
    const { jobs } = this.props.firebase.database
    const { watchlistIndex } = this.props.app
    const arrayOfJobObjs = watchlist.map(documentId =>
      jobs.find(obj => obj.id === documentId)
    )

    let finalJobArray = []

    if (arrayOfJobObjs.length > 5) {
      for (let i = 0; i < watchlistIndex + 5; i++) {
        finalJobArray.push(arrayOfJobObjs[i])
      }
    } else {
      finalJobArray = arrayOfJobObjs
    }

    this.setState(() => ({
      numberOfSlidesRendered: watchlistIndex + 5,
      numberOfSlidesInWatchlist: watchlist.length,
      slides: finalJobArray
    }))
  }

  handleAfterSlide = slideIndex => {
    const { dispatch } = this.props
    const { numberOfSlidesRendered, slides } = this.state
    if (numberOfSlidesRendered === slideIndex + 1) {
      const fiveMoreSlides = this.getFiveMoreSlides()
      this.setState(() => ({
        numberOfSlidesRendered: slides.length + 5,
        slides: [...slides, ...fiveMoreSlides]
      }))
    }
    dispatch(setWatchlistIndex(slideIndex))
  }

  handleRenderPageDots = ({ currentSlide }) => {
    const { numberOfSlidesInWatchlist } = this.state
    return (
      <Box margin={{ bottom: 'xlarge' }}>
        <Text color="white" weight="bold">
          Job {currentSlide + 1} of {numberOfSlidesInWatchlist}
        </Text>
      </Box>
    )
  }

  render() {
    const { slides } = this.state
    const { watchlistIndex } = this.props.app

    if (this.state.slides.length === 0) {
      return null
    } else {
      return (
        <Box align="center" fill justify="start" overflow="auto">
          <Carousel
            afterSlide={this.handleAfterSlide}
            cellAlign="center"
            renderBottomCenterControls={this.handleRenderPageDots}
            slideIndex={watchlistIndex}
          >
            {slides.map(jobObj => {
              const { data, id } = jobObj
              return (
                <JobCard
                  key={id}
                  addressCountry={data.addressCountry}
                  addressLocality={data.addressLocality}
                  addressRegion={data.addressRegion}
                  datePosted={data.datePosted}
                  description={data.description}
                  documentId={id}
                  employmentType={data.employmentType}
                  industry={data.industry}
                  title={data.title}
                />
              )
            })}
          </Carousel>
        </Box>
      )
    }
  }
}

const mapStateToProps = ({ app, firebase }) => ({ app, firebase })

export default connect(mapStateToProps)(Watchlist)
