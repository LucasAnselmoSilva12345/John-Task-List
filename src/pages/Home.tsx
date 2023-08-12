import { Header } from '../components/Header';
import { TodoTaskShow } from '../components/TodoTaskShow/TodoTaskShow';

export function Home() {
  return (
    <>
      <Header />
      <main className="w-4/5 my-0 mx-auto lg:w-1/2">
        <section className="mt-5 flex flex-col">
          <div className="flex flex-col gap-1 mb-2">
            <label
              className="text-base text-zinc-950 font-medium"
              htmlFor="task"
            >
              What needs to do now?
            </label>
            <input
              type="text"
              className="w-full py-3 text-sm text-zinc-800 border-none rounded focus:outline focus:outline-2 focus:outline-blue-400"
              id="task"
              name="task"
              autoComplete="off"
              placeholder="Write your task"
            />
          </div>

          <button
            className="bg-blue-600 text-blue-50 py-3 font-medium border-none rounded"
            type="submit"
          >
            Add task
          </button>
        </section>

        <div>
          <TodoTaskShow />
        </div>
      </main>
    </>
  );
}
