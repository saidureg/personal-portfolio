import PropTypes from "prop-types";

const SkillsCard = ({ data }) => {
  return (
    <div className="text-center text-white bg-black p-4  rounded-xl hover:shadow-[#000244cc] hover:shadow-lg">
      <div className="h-14">
        <img className="w-12 mx-auto" src={data?.icon} alt="" />
      </div>
      <h2>{data?.name}</h2>
    </div>
  );
};
SkillsCard.propTypes = {
  data: PropTypes.object,
};

export default SkillsCard;
