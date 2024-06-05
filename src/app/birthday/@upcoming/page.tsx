import BirthdayCard from "@/components/birthday/BirthdayCard";

export default function UpcomingBirthday() {
  return (
    <div>
      <h2 className=" font-extrabold style-text-1 p-3">
        Upcoming Birthday
      </h2>
      <div className=" px-6 h-[400px] overflow-y-scroll">
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
        <BirthdayCard />
      </div>
    </div>
  );
}
