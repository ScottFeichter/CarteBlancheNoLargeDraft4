//https://css-tricks.com/making-calendars-with-accessibility-and-internationalization-in-mind/


// Function will render a single month.
// Later we’ll call this method from [...Array(12).keys()]
// to render an entire year.
function custCal(settings = {}) {

  // Reference for current date so we can highlight it
const today = new Date();

// “Configuration Object” that we’ll merge with the
// optional settings object of the primary method:
const config = Object.assign(
  {
    locale: document.documentElement.getAttribute("lang") || "en-US",
    today: {
      day: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear(),
    },
  },
  settings
);

// Determines the month
const date = config.date ? new Date(config.date) : today;

// this uses an API call to return which day of the week is the first based on location
if (!config.info)
  config.info = new Intl.Locale(config.locale).weekInfo || {
    firstDay: 7,
    weekend: [6, 7],
  };


  //render method
  const render = (date, locale) => {}

  const month = date.getMonth();
  const year = date.getFullYear();
  const numOfDays = new Date(year, month + 1, 0).getDate();
  const renderToday = (year === config.today.year) && (month === config.today.month);
}
