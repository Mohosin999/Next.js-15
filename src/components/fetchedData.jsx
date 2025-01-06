import { redirect } from "next/navigation";

const FetchedData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/posts2");
  // redirect
  if (!response.ok) {
    redirect("/contact");
  }

  const data = await response.json();

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="flex flex-col gap-4">
          <p className="shadow-md p-5 my-2">{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchedData;
