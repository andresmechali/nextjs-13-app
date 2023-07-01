import { Todo } from "@/typings";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      next: {
        // This is fetched, cached, and used for server-side rendering the component.
        // This content will stay static until it is revalidated.
        revalidate: 60, // Next.js will revalidate after 60 seconds
      },
    }
  );

  const todo: Todo = await res.json();

  return todo;
};

export default async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);

  if (!todo.id) {
    return notFound();
  }

  return (
    <div className="p-10 bg-yellow-100 m-2 shadow-lg text-black">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">
        By user: {todo.userId}
      </p>
    </div>
  );
}

// This will tell Next.js how to generate the static pages for every todo
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos: Todo[] = await res.json();

  return todos.splice(0, 10).map(({ id }) => ({ todoId: id.toString() }));
}
