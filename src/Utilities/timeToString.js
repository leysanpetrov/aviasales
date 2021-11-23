
const timeToString = (time) => {
  const diffInHrs = time / 60
  const hh = Math.floor(diffInHrs)

  const diffInMin = (diffInHrs - hh) * 60
  const mm = Math.floor(diffInMin)

  const formattedHH = hh.toString().padStart(2, '0')
  const formattedMM = mm.toString().padStart(2, '0')

  return `${formattedHH}ч${formattedMM}м`
}

export default timeToString