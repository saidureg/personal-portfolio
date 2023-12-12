import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  console.log(project?.view);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div>
      <div className="group relative rounded-lg cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96">
          <img
            className="h-full w-full object-cover transition-transform duration-500 "
            src={project?.image}
            alt=""
          />
        </div>

        <div className="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-10">
          <div className="h-80 bg-white">
            <h1 className="w-full bg-amber-500 py-1 font-dmserif text-3xl font-bold text-black">
              {project?.name}
            </h1>
            <p className="mb-3 p-2 text-left text-lg  font-medium text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {project?.desc}
            </p>
            <div className="grid grid-cols-3 gap-2  mx-2">
              <button className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60">
                Details
              </button>

              <button
                onClick={() => openInNewTab(project?.links?.view)}
                className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                Live Link
              </button>

              <button
                onClick={() => openInNewTab(project?.links?.code)}
                className="rounded-full bg-neutral-900 px-3.5 py-2 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
