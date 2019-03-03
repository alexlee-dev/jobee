import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import Carousel from 'nuka-carousel'
import JobCard from '../components/JobCard'

class Watchlist extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    firebase: PropTypes.object.isRequired
  }

  state = {
    slides: []
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

    this.setState(() => ({ slides: finalJobArray }))
  }

  handleAfterSlide = slideIndex => {
    console.log({ slideIndex })
  }

  render() {
    const { slides } = this.state

    if (this.state.slides.length === 0) {
      return null
    } else {
      return (
        <Box align="center" fill justify="start" overflow="auto">
          <Carousel afterSlide={this.handleAfterSlide} cellAlign="center">
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
