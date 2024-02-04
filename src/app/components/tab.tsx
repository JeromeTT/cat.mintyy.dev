import { Dispatch, SetStateAction } from "react";

type Tab = {
  name: string;
  url: string;
  id: string;
};

const ListTab = (props: {
  clickEvent: Dispatch<SetStateAction<string>>;
  children: Tab;
}) => {
  return (
    <li
      className="bg-white hover:bg-gray-400"
      id={props.children.id}
      onClick={(e) => props.clickEvent((e.target as HTMLTextAreaElement).id)}
    >
      {props.children.name}
    </li>
  );
};

export default ListTab;
