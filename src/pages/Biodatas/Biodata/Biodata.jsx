import { Helmet } from "react-helmet-async";
import BiodataBanner from "../BiodataBanner/BiodataBanner";
import ShowAllCreatedBiodata from "../ShowAllCreatedBiodata/ShowAllCreatedBiodata";

const Biodata = () => {
  return (
    <div>
      <Helmet>
        <title>EternalTie | Biodatas</title>
      </Helmet>
      <BiodataBanner></BiodataBanner>
      <ShowAllCreatedBiodata></ShowAllCreatedBiodata>
    </div>
  );
};

export default Biodata;
