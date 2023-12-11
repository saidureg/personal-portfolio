import PropTypes from "prop-types";
const SectionTitle = ({ text, icon, heading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-[#D99904] mb-2">{text}</p>
      <h3 className="text-4xl uppercase border-y-4 py-3">
        {icon} {heading}
      </h3>
    </div>
  );
};
SectionTitle.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.elementType,
  heading: PropTypes.string,
};
export default SectionTitle;
