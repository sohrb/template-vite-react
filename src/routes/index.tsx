import { createFileRoute } from "@tanstack/react-router";

const IndexRoute = createFileRoute("/")({
  component: () => {
    return <></>;
  },
});

export { IndexRoute as Route };
