import Today from "@/sections/Today/Today";

export default async function Page() {
  return (
    <main>
      <div className="w-full bg-primarylight px-5 pb-10">
        <div className="mx-auto max-w-[1024px]">
          <Today />
        </div>
      </div>
    </main>
  );
}
