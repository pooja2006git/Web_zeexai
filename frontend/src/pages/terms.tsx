import TermsOfService from "./TermsOfService";
import SectionHeader from "./SectionHeader";
const Privacy = () => {
  return (
    <>
      {/* SECTION HEADER 3 */}
      <SectionHeader
        
        word1="Terms of "
        word2=" Services"
        description="Last updated: April 30, 2025"
      />
      <TermsOfService />
    </>
  );
};

export default Privacy;
