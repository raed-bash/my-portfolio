import Profile from "./profile";
import MainSection from "./main-section";

function Content() {
  return (
    <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
      <Profile />
      <MainSection />
    </div>
  );
}

export default Content;
