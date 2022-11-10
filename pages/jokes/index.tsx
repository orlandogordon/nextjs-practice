// type TodosProps = {
//   items: Todo[];
//   onRemoveTodo: (id: string) => void;
//   children?: ReactNode;
// };

import { Fragment } from "react";
import Link from "next/link";
// const Todos: React.FC<PropsWithChildren<{ items: string[] }>> = (props) => {
// const Todos = ({items, children}: TodosProps) => {
const JokesPage = () => {
  return (
    <Fragment>
      <ul>
        <li>Jokes will be here...</li>
        <li>
          Allow an option to input a keyword to generate a joke specific to a
          certain category
        </li>
        <li>A refresh button for a new joke</li>
      </ul>
      <Link href="/">
        <button>Return to home</button>
      </Link>
    </Fragment>
  );
};

export default JokesPage;
