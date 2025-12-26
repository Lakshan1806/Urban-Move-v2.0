import drive from "../../assets/drive/drive.png";

function DriveHeroSection() {
  return (
    <div className="flex h-full w-full shrink-0 snap-start items-center justify-around p-4">
      <div>Drive on your schedule and earn what you deserve.</div>
      <div>Already have an account? Sign in</div>
      <div className="button-wrapper">
        <button className="button-primary">Get Started</button>
      </div>
      <img src={drive} className="h-full rounded-3xl" />
    </div>
  );
}

export default DriveHeroSection;
