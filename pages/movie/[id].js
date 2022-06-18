import { useRouter } from "next/router";

export default function Movie() {
  return <h1>{useRouter().query.id}</h1>;
}
