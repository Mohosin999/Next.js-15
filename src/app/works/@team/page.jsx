import Wrapper from "@/components/wrapper";

export default async function Team() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((res) => res.json());

  return (
    <Wrapper>
      <h1>User's Name List</h1>

      {response.map((user) => (
        <h3 key={user.id} className="my-2 p-4 bg-sky-300">
          {user.name}
        </h3>
      ))}
    </Wrapper>
  );
}
