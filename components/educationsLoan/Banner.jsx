import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Consumer Durable Finance" cls="educations-loan">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Product", "/"],
          ["Loan", "/"],
          ["Consumer Durable Finance", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
