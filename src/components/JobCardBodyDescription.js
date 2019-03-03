import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Box, Button } from 'grommet'
import marked from 'marked'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setDescriptionVisibility } from '../redux/actions/app'

class JobCardBodyDescription extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  state = { md: null }

  componentDidMount() {
    const { description } = this.props
    const md = marked(description)
    this.setState(() => ({ md }))
  }

  handleBack = () => {
    const { dispatch } = this.props
    dispatch(setDescriptionVisibility(false))
  }

  render() {
    const { md } = this.state
    if (!md) {
      return null
    } else {
      return (
        <Box pad="large">
          <Box
            fill
            margin={{ bottom: 'medium' }}
            pad={{ vertical: 'medium' }}
          >
            <Button onClick={this.handleBack}>
              <FontAwesomeIcon
                color="#c6cedf"
                icon={['fas', 'chevron-double-left']}
              />
            </Button>
          </Box>
          <div
            dangerouslySetInnerHTML={{ __html: md }}
            className="description-container"
          />
        </Box>
      )
    }
  }
}

const mapDispatchToProps = ({ dispatch }) => ({ dispatch })

export default connect(mapDispatchToProps)(JobCardBodyDescription)
