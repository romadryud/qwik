import { component$, $ } from "@builder.io/qwik";
import { ErrorBoundary, server$ } from "@builder.io/qwik-city";

export default component$(() => {
  return <ServerErrorIssue />;
});

const serverAction = server$(() => {
  throw new Error("Hello from server action");
});

const ServerErrorIssue = component$(() => {
  return (
    <ErrorBoundary
      fallback$={$((error) => {
        return <div>Caught error: {error.message}</div>;
      })}
    >
      <div>
        All good
        <button
          onClick$={$(() => {
            serverAction();
          })}
        >
          Throw error
        </button>
      </div>
    </ErrorBoundary>
  );
});
