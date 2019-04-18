const fields = [
  {
    id: 'firstName',
    key: 'firstName',
    label: 'First Name',
    placeholder: 'Your name...',
    maxLength: 255,
    required: true,
    errorText: 'Please write down your first name',
    rows: 1
  },
  {
    id: 'lastName',
    key: 'lastName',
    label: 'Last Name',
    placeholder: 'Your last name...',
    maxLength: 255,
    required: true,
    errorText: 'Please write down your last name',
    rows: 1
  },
  {
    id: 'email',
    key: 'email',
    label: 'Email',
    placeholder: 'Your email address...',
    maxLength: 255,
    required: true,
    errorText: 'Don’t forget to tell us what your email address is',
    rows: 1
  },
  {
    id: 'subject',
    key: 'subject',
    label: 'Subject',
    placeholder: 'Let us know your concerns!',
    maxLength: 500,
    required: true,
    errorText: 'Don’t forget to write something to use!',
    rows: 6
  },
];

export default fields;