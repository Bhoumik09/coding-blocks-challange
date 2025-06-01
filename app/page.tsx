import { HeroSection } from "@/components/HeroSection";
import JobCategoryList from "@/components/JobCategory";
import { Navbar } from "@/components/Navbar";
import ResumeAdvantages from "@/components/ResumeAdvantages";
import { ResumeFeatureTeller } from "@/components/ResumeFeatureTeller";
import ResumeReviews from "@/components/ResumeReviews";

export default function Home() {
  return (
    <div className="relative">
      <div aria-label="navbar" className="sticky top-0 left-0 z-20 w-full">
        <Navbar />
      </div>
      <div className=" z-0">
        <HeroSection />
        {/* <FeatureComponent/> */}
        <ResumeFeatureTeller/>
        <ResumeReviews/>
        <ResumeAdvantages/>
        <JobCategoryList/>
      </div>
      
    </div>
  );
}
