const date = require ('../models/thought')

const formatDate = (date) =>  {
    
    return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
}

module.exports = formatDate;