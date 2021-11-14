const getReminders = () => {
    axios.get('http://localhost:3001/api')
      .then(res => console.log(res))
      .catch(err => console.log(err))
}
  
const postReminder = () => {
    axios.post('http://localhost:3001/api', newReminder)
      .then(res => console.log(res))
      .catch(err => console.log(err))
}
  
const deleteReminder = (id) => {
    axios.delete(`http://localhost:3001/api/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
}

export default (getReminders, postReminder, deleteReminder)