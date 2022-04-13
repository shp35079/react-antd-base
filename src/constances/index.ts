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
