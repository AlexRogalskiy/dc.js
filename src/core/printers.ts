import { printSingleValue } from './utils';

interface IPrinters {
    filters: (filters) => string;
    filter: (filter) => string;
}

export const printers: IPrinters = {
    filter(filter): string {
        return '';
    },
    filters(filters): string {
        return '';
    },
};

/**
 * Converts a list of filters into a readable string.
 * @method filters
 */
printers.filters = function (filters) {
    let s = '';

    for (let i = 0; i < filters.length; ++i) {
        if (i > 0) {
            s += ', ';
        }
        s += printers.filter(filters[i]);
    }

    return s;
};

/**
 * Converts a filter into a readable string.
 * @method filter
 */
printers.filter = function (filter) {
    let s = '';

    if (typeof filter !== 'undefined' && filter !== null) {
        if (filter instanceof Array) {
            if (filter.length >= 2) {
                s = `[${filter.map(e => printSingleValue(e)).join(' -> ')}]`;
            } else if (filter.length >= 1) {
                s = printSingleValue(filter[0]);
            }
        } else {
            s = printSingleValue(filter);
        }
    }

    return s;
};
