import { useRouter } from "next/router";

export default function theproject() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h2>proyect details</h2>
      <p>proyect id: {router.query.theproject}</p>
    </div>
  );
}
