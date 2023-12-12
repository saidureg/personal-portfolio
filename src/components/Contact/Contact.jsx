import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import { FaHeadset } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d5xdis6",
        "template_c0g64fh",
        form.current,
        "S5VbJD8BVfsxeLEfc"
      )
      .then(
        () => {
          e.target.reset();
          toast("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className=" bg-neutral text-neutral-content py-10">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="text-4xl mb-2 font-bold flex items-center justify-center gap-2">
          {" "}
          <FaHeadset />
          Get In <span className="text-amber-400">Touch</span>
        </h3>
        <p className="text-center text-xl text-gray-400 font-medium my-5">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <div className="bg-[#171721] w-10/12 md:w-3/5 mx-auto rounded-xl">
          <h3 className="text-3xl pt-6 px-4 font-bold flex items-center gap-2">
            Email Me <MdRocketLaunch />
          </h3>
          <form ref={form} onSubmit={sendEmail} className="card-body ">
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Phone</span>
              </label>
              <input
                type="number"
                placeholder="Your phone"
                name="phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Your Message</span>
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                className="input input-bordered"
                id=""
                cols="30"
                rows="30"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
