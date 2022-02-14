const getTime = (date) =>
 `${new Date(date).getUTCHours().toString().padStart(2, '0')}:${new Date(date).getUTCMinutes().toString().padStart(2, '0')}`


export default getTime