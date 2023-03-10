import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="contact">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 border-b-5 w-36 border-indigo-600 pb-2">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <form>
              <div className="mb-5">
                <label htmlFor="name" className="block font-bold mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full py-2 px-3 border border-gray-400 rounded-md"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full py-2 px-3 border border-gray-400 rounded-md"
                  placeholder="Your email"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block font-bold mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full py-2 px-3 border border-gray-400 rounded-md h-40 resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="mb-5">
              <h3 className="font-bold mb-2">Email:</h3>
              <p>ambrebarah@gmaik.com</p>
            </div>

            <div className="mb-5">
              <h3 className="font-bold mb-2">Phone:</h3>
              <p>+33 6 63 05 74 20</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;