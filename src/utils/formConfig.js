const formConfig = [
  {
    type: "text",
    name: "fullName",
    label: "fullName",
    placeholder: "Enter your name",
    required: true,
  },
  {
    type: "email",
    name: "email",
    label: "email",
    placeholder: "example@email.com",
    required: true,
  },
  {
    type: "number",
    name: "age",
    label: "age",
    placeholder: "Enter your age",
    required: true,
  },
  {
    type: "textarea",
    name: "message",
    label: "message",
    placeholder: "write your meesage",
    required: false,
  },
  {
    type: "select",
    name: "country",
    label: "country",
    required: true,
    options: [
      {
        value: "syria",
        label: "سوريا",
      },
      {
        value: "lebanon",
        label: "لبنان",
      },
      {
        value: "jordan",
        label: "الأردن",
      },
    ],
  },
];

export default formConfig;