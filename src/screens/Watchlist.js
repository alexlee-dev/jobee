import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Text } from 'grommet'
import Carousel from 'nuka-carousel'
import JobCard from '../components/JobCard'

class Watchlist extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    firebase: PropTypes.object.isRequired
  }

  state = {
    currentSlideIndex: 0,
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
    const arrayOfJobObjs = watchlist.map(documentId =>
      jobs.find(obj => obj.id === documentId)
    )

    let finalJobArray = []
    if (arrayOfJobObjs.length > 5) {
      for (let i = 0; i < 5; i++) {
        finalJobArray.push(arrayOfJobObjs[i])
      }
    } else {
      finalJobArray = arrayOfJobObjs
    }

    this.setState(() => ({
      numberOfSlidesRendered: 5,
      numberOfSlidesInWatchlist: watchlist.length,
      slides: finalJobArray
    }))
  }

  handleAfterSlide = slideIndex => {
    const { numberOfSlidesRendered, slides } = this.state
    if (numberOfSlidesRendered === slideIndex + 1) {
      const fiveMoreSlides = this.getFiveMoreSlides()
      this.setState(() => ({
        currentSlideIndex: slideIndex,
        numberOfSlidesRendered: slides.length + 5,
        slides: [...slides, ...fiveMoreSlides]
      }))
    } else {
      this.setState(() => ({ currentSlideIndex: slideIndex }))
    }
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
    const { currentSlideIndex, slides } = this.state

    if (this.state.slides.length === 0) {
      return null
    } else {
      return (
        <Box align="center" fill justify="start" overflow="auto">
          <Carousel
            afterSlide={this.handleAfterSlide}
            cellAlign="center"
            renderBottomCenterControls={this.handleRenderPageDots}
            slideIndex={currentSlideIndex}
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

const mapStateToProps = ({ firebase }) => ({ firebase })

export default connect(mapStateToProps)(Watchlist)
