import { Container } from "@mantine/core";
import Quiz from "./_components/Quiz";

export default async function Home() {
  return (
    <>
      <Container>
        <h2 className="my-4 text-center text-5xl font-bold">Quizy App</h2>
        <Quiz />
      </Container>
    </>
  );
}
