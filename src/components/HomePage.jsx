import AchievementsSection from "../shared/Components/Home/AchievementsSection";
import CertificateSection from "../shared/Components/Home/CertificateSection";
import FeaturesSection from "../shared/Components/Home/FeaturesSection ";
import Hero from "../shared/Components/Home/Hero";
import ManufacturingPolicies from "../shared/Components/Home/ManufacturingPolicies";
import PillarsSection from "../shared/Components/Home/PillarsSection";
import ReviewsSection from "../shared/Components/Home/ReviewsSection";
import ServicesSection from "../shared/Components/Home/servicesData ";


export default function Homepage () {
    return(
        <>
        <Hero/>
        <FeaturesSection/>
        <ServicesSection/>
        <AchievementsSection/>
        <PillarsSection/>
        <CertificateSection/>
        <ManufacturingPolicies/>
        <ReviewsSection/>
        </>
    )
}