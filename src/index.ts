class Datetime {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
  microsecond: number
  calendar: string

  constructor(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    microsecond: number,
    calendar: string
  ) {
    this.year = year
    this.month = month
    this.day = day
    this.hour = hour
    this.minute = minute
    this.second = second
    this.microsecond = microsecond
    this.calendar = calendar
  }

  toordinal(fractional = false): number {
    const ordinal = 0
    return ordinal
  }

  static fromordinal(
    jday: number,
    calendar = 'standard',
    has_year_zero = true
  ): Datetime {
    return new Datetime(1999, 1, 1, 0, 0, 0, 0, (calendar = 'standard'))
  }
}

function date2num(
  dates: Datetime[],
  units: string,
  calendar = 'standard',
  has_year_zero = true
): number[] {
  const nums: number[] = []

  dates.forEach((d) => {
    nums.push(d.toordinal())
  })

  return nums
}

function num2date(
  times: number[],
  units: string,
  calendar = 'standard',
  has_year_zero = true
): Datetime[] {
  const dates: Datetime[] = []

  times.forEach((t) => {
    dates.push(Datetime.fromordinal(t))
  })

  return dates
}

// todo: remove this after initial package setup is complete
function sum(a: number, b: number): number {
  return a + b
}

export { sum, Datetime, date2num, num2date }
