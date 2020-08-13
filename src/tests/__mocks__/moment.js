const moment = jest.requireActual('moment') // imports actual moment, not mocked

export default (timestamp = 0) =>{
    return moment(timestamp)
}