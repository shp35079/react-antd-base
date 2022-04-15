import PopoverButton from "../components/PopoverButton";

export const TABLE_COLUMN = [
  {
    title: "이름",
    dataIndex: "name",
    key: "name",
    sorter: true,
  },
  {
    title: "소속",
    dataIndex: "company",
    key: "company",
    sorter: true,
  },
  {
    title: "이메일",
    dataIndex: "email",
    key: "email",
    sorter: true,
  },
  {
    title: "직함",
    dataIndex: "jobTitle",
    key: "jobTitle",
  },
  {
    width: "7%",
    title: "",
    dataIndex: "menu",
    key: "menu",
    render: () => PopoverButton(),
  },
];

export const FORM_ITEM_INFO = [
  {
    label: "이름",
    name: "name",
    rules: [{ required: true }],
  },
  {
    label: "소속",
    name: "company",
    rules: [{ required: true }],
  },
  {
    label: "이메일",
    name: "email",
    rules: [{ required: true, type: "email" }],
  },
  {
    label: "직함",
    name: "jobTitle",
    rules: [{ required: true }],
  },
];
