// type TodosProps = {
//   items: Todo[];
//   onRemoveTodo: (id: string) => void;
//   children?: ReactNode;
// };

import { Fragment } from "react";
import Link from "next/link";
// const Todos: React.FC<PropsWithChildren<{ items: string[] }>> = (props) => {
// const Todos = ({items, children}: TodosProps) => {
const RandomUser = () => {
  return (
    <Fragment>
      <ul>
        <li>User information will be here...</li>
        <li>A refresh button to generate a new user</li>
        <li>
          An add friend feature that saves to local storage. Or perhaps link to
          firebase for auth and database storage
        </li>
      </ul>
      <Link href="/">
        <button>Return to home</button>
      </Link>
    </Fragment>
  );
};

export default RandomUser;
