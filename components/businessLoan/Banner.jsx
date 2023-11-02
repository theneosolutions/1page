import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Micro Finance" cls="business-loan">
      <Breadcrumb
        breadcrumbs={[
          ["Home", ""],
          ["Product", ""],
          ["Loan", "/"],
          ["Micro Finance", ""],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
