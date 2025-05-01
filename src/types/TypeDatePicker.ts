type DatePicker = {
    config: Config
    viewYear: number
    viewMonth: number
    input: HTMLInputElement
}
type Data = {
    date: string
    _date: Date

    dates: string[]
    _dates: Date[]

    dateFrom: string
    dateTo: string
    _dateFrom: Date
    _dateTo: Date

}

type Config = {
    /** Determines the date format */
    format?: "yyyy-mm-dd"
    /** Determines the date format of the 'datechanged' callback; 'format' config will be used by default **/
    outFormat?: "yyyy-mm-dd"
    /** Determines if clicking the date will automatically select it; OK button will not be displayed if true */
    auto?: boolean,
    /** Determines if Clear button is displayed */
    clearBtn?: boolean,
    /** Determines if Cancel button is displayed */
    cancelBtn?: boolean,
    /** Determines if clicking the overlay will close the date picker */
    overlayClose?: boolean,
    /** Determines the minimum selectable date */
    minDate?: string | null,
    /** Determines the maximum selectable date */
    maxDate?: string | null,
    /** Determines the minimum year of selectable date */
    minYear?: number | null,
    /** Determines the maximum year of selectable date */
    maxYear?: number | null,
    /** Determines how many years (earlier than currently selected year) to display in the year selection */
    priorYears?: number,
    /** Determines how many years (later than currently selected year) to display in the year selection */
    laterYears?: number,
    /** Array of dates to be disabled (format should be the same as the specified format) */
    disabledDates?: string[],
    /** Array of days of the week to be disabled (i.e. Monday, Tuesday, Mon, Tue, Mo, Tu) */
    disabledDays?: string[],
    /* Determines if date picker range mode is on */
    range?: boolean,
    /**  Range string delimiter */
    rangeDelim?: string,
    /** Date from target input element (range mode) */
    fromTarget?: string,
    /** Date to target input element (range mode) */
    toTarget?: string,
    /** Determines if date picker can select multiple dates */
    multiple?: boolean,
    /** callback functions */
    events?: {
        /** Callback function on date(or date range) selection
                Parameters?: 
                    data - Object contains the data of the selected date.Property starting with underscore is a Date object
                Default { _date, date }
                    Range mode { _dateFrom, dateFrom, _dateTo, dateTo, value - formatted date range }
                    datepicker - The date picker object instance */

        dateChanged?: (data: Data, datepicker?: DatePicker) => void;

        /**
         * Callback function to for custom date range formatting (displayed on the input) upon selection
         * Parameters?:
         *     from - Date object of the selected start date
         *     to   - Date object of the selected end date
         */
        onRangeFormat?: (from?: string, to?: string) => void;

        /**
         * Callback function when date picker is initialized
         * Parameter?:
         *     datepicker - The date picker object instance
         */
        ready?: (datepicker?: DatePicker) => void;

        /**
         * Callback function when date picker is shown
         */
        shown?: () => void;

        /**
         * Callback function when date picker is hidden
         */
        hidden?: () => void;
    },
    /** internationalization */
    i18n?: {
        /**required; array of month names */
        months: string[],
        // required; array of 3-character month names
        shortMonths: string[],
        /** required; array of day names */
        days: string[],
        /** required; array of 3-character day names */
        shortDays: string[],
        /** required; array of 2-character day names; this will used as week day label on the calendar */
        shorterDays: string[],
        /** required; first day of the week; this gets overriden by `config.firstDay` */
        firstDay: number,
        /** optional; dictionary for the button texts (if not specified English text will be used) */
        dict?: {
            /** optional; OK button text */
            btnOk?: string,
            /** optional; CANCEL button text */
            btnCancel?: string,
            /** optional; CLEAR button text */
            btnClear?: string
        }
    },
    /** first day of the week (1 - 7; Monday - Sunday); default will be fetched from i18n.firstDay */
    firstDay?: string,
    /** parent element where the date picker DOM will be added */
    root?: string
}


type TypeDatePicker = {
    config: Config
    onSelectData: Data
    onSelectPicker: DatePicker
}

export default TypeDatePicker