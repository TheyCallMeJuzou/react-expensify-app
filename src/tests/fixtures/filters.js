import moment from 'moment'
import { v1 as uuidv1 } from 'uuid';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    startDateId:'13131313123',
    endDateId:'131313212321313123',
}

const altFilters = {
    text: 'Bbills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3,'days'),
    startDateId: '13131313123',
    endDateId: '131313212321313123',
}

export {filters, altFilters}