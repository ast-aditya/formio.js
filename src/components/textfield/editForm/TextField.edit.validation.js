export default [
  {
    weight: 110,
    key: 'validate.minLength',
    label: 'Minimum Length',
    placeholder: 'Minimum Length',
    type: 'number',
    tooltip: 'The minimum length requirement this field must meet.',
    input: true
  },
  {
    weight: 120,
    key: 'validate.maxLength',
    label: 'Maximum Length',
    placeholder: 'Maximum Length',
    type: 'number',
    tooltip: 'The maximum length requirement this field must meet.',
    input: true
  },
  {
    weight: 125,
    key: 'validate.minWords',
    label: 'Minimum Word Length',
    placeholder: 'Minimum Word Length',
    type: 'number',
    tooltip: 'The minimum amount of words that can be added to this field.',
    input: true
  },
  {
    weight: 126,
    key: 'validate.maxWords',
    label: 'Maximum Word Length',
    placeholder: 'Maximum Word Length',
    type: 'number',
    tooltip: 'The maximum amount of words that can be added to this field.',
    input: true
  },{
    weight: 130,
    key: 'validate.regexTypeCategory',
    label: 'Regular Expression Type Category',
    placeholder: 'Select a Pattern Type',
    type: 'select',
    tooltip: 'Choose between custom or pre-saved regex patterns.',
    input: true,
    data: {
      values: [
        { label: 'Presaved Pattern', value: 'presaved' },
        { label: 'Custom Pattern', value: 'custom' }
      ]
    },
    defaultValue: 'presaved'
  },
  {
    weight: 135,
    key: 'validate.pattern',
    label: 'Presaved Regular Expression Pattern',
    placeholder: 'Select a Pre-saved Regular Expression Pattern',
    type: 'select',
    tooltip: 'Choose from common patterns.',
    input: true,
    data: {
      values: [
        { label: 'Email', value: '^\\S+@\\S+\\.\\S+$' },
      ]
    },
    conditional: {
      json: { '===': [{ var: 'data.validate.regexTypeCategory' }, 'presaved'] }
    },
    onChange: (component, form, row, instance) => {
      instance.updateValue({ validate: { ...row.validate, pattern: row.validate.pattern } });
    }
  },
  {
    weight: 140,
    key: 'validate.pattern',
    label: 'Custom Regular Expression',
    placeholder: 'Enter your custom regex pattern',
    type: 'textfield',
    tooltip: 'The regular expression pattern test that the field value must pass before the form can be submitted.',
    input: true,
    conditional: {
      json: { '===': [{ var: 'data.validate.regexTypeCategory' }, 'custom'] }
    },
    onChange: (component, form, row, instance) => {
      instance.updateValue({ validate: { ...row.validate, pattern: row.validate.pattern } });
    }
  }
];
