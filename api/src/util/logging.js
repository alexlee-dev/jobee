import figlet from 'figlet'
import boxen from 'boxen'
import gradient from 'gradient-string'
import chalk from 'chalk'
import moment from 'moment'
import fs from 'fs'

export const createTitle = text => {
  return new Promise((resolve, reject) => {
    figlet(text, { font: 'Speed' }, (err, data) => {
      if (err) {
        console.log('Error in Figlet.')
        console.log(err)
        reject(err)
      } else {
        console.log(
          boxen(gradient.pastel(data), {
            padding: 1,
            margin: 1,
            borderStyle: 'round',
            align: 'center',
            float: 'center'
          })
        )
        resolve()
      }
    })
  })
}

export const log = message => console.log(chalk.yellowBright(message))
export const success = message => console.log(chalk.greenBright(message))
export const error = message => console.log(chalk.redBright(message))
export const logNewRequest = path => {
  const time = moment().format('h:mm:ss A')
  log('--------------------')
  log(`New request for "${path}" at ${time}.`)
}
export const logResponse = content => {
  console.log('')
  if (content.length > 99) {
    const final = content.slice(0, 99)
    console.log(
      chalk.greenBright('RESPONSE: ') +
        chalk.italic('Response too long. Shortened to ... ') +
        chalk.magentaBright(final)
    )
    return
  }
  console.log(chalk.greenBright('RESPONSE: ') + chalk.magentaBright(content))
}

export const allowCors = (res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
}

/**
 * Reads a JSON file.
 * @param {String} responseName Name of JSON file in responses folder.
 * @returns {Promise}
 */
export const getPreloadedJSON = responseName => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      __dirname + `/responses/${responseName}.json`,
      'utf8',
      (err, data) => {
        if (err) {
          reject(err)
        } else {
          const obj = JSON.parse(data)
          resolve({ parsedJSON: obj, originalData: data })
        }
      }
    )
  })
}
