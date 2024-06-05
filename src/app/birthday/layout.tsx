export default function BirthdayLayout({
  children,
  add,
  upcoming,
}: {
  children: React.ReactNode;
  add: React.ReactNode;
  upcoming: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <div className=" flex gap-4 flex-col lg:flex-row">
        <div className=" flex-[4] bg-slate-600/25 backdrop-blur-lg w-full h-[75vh] rounded-lg border-2 border-black dark:border-white">
          {upcoming}
        </div>
        <div className=" flex-[2] bg-slate-600/25 backdrop-blur-lg w-full h-[75vh] rounded-lg border-2 border-black dark:border-white">
          {add}
        </div>
      </div>
    </main>
  );
}
