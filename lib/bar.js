const c = require('ansi-colors')

module.exports = (percent, fps, timemark) => {
  const stream = process.stderr

  let percentStr = `${c.bold(percent)}${c.bold('%')}`
  let fpsStr = `${c.bold(fps)}${c.italic('/fps')}`
  let timemarkStr = `${c.bold(timemark)}${c.italic('/encoded')}`

  // calculate 3 dots
  let dotsCount = (Number(Number(percent).toFixed()) % 3) + 1
  let downloadingStr = `${c.bold(`Downloading${'.'.repeat(dotsCount)}`)}${' '.repeat(3 - dotsCount)}`

  let str = `${c.bold.cyan('i')} ${downloadingStr} ${percentStr} ${fpsStr} ${timemarkStr}`
  stream.cursorTo(0)
  stream.write(str)
  stream.clearLine(1)
}