export const EmailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LicenseRegex =
  /^((?:^[A-Za-z]{2}-\d{2}-\d{2}$)|(?:^[A-Za-z]{2}\d{2}\d{2}$)|(?:^\d{2}-\d{2}-[A-Za-z]{2}$)|(?:^\d{2}\d{2}[A-Za-z]{2}$)|(?:^\d{2}-[A-Za-z]{2}-\d{2}$)|(?:^\d{2}[A-Za-z]{2}\d{2}$)|(?:^[A-Za-z]{2}-\d{2}-[A-Za-z]{2}$)|(?:^[A-Za-z]{2}\d{2}[A-Za-z]{2}$))/;

export const PhoneNumberRegex = /^((?:^[1-9]{1}\d{8}$))/;

export const ErrorPage = {
  TITLE: 'Oops, something went wrong',
  DESCRIPTION: 'Sorry for the inconvenience. please try again later.',
};

export const ErrorMessages = {
  HOME: 'Error getting home content',
  FAQ: 'Error getting faq content',
  FAQ_QUESTIONS: 'Error getting faq questions content',
  PRIVACY_POLICY: 'Error getting privacy policy content',
  TERMS_AND_CONDITIONS: 'Error getting terms and conditions content',
  HEADER: 'Error getting header content',
  FOOTER: 'Error getting footer content',
};

export const SearchPlaceholder = ' Searching ...';
