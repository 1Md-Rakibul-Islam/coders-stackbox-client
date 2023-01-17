import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from "../../../../components/Buttons/Button";
import "./OurTeams.css";

const OurTeams = ({ card }) => {
  const { id, image, designation, name, github } = card;
  return (
    <div>
      <div className="rounded-lg shadow-lg pt-8 text-white">
        <div className="t-5 bg-white mx-12 rounded-xl">
          <img
            className="w-full mx-auto align-center rounded-full p-5 h-52 w-52"
            src={image}
            alt=""
          />
        </div>
        <div className="p-6 text-center">
          <h1 className="text-3xl font-medium mb-2 name">{name}</h1>
          <h5 className="designation">{designation}</h5>
          <div>
            <ul className="flex justify-center mt-5 text-3xl">
              <li>
                <a target="_blank" href={`${github}`}>
                  <Button>
                    <FaGithubAlt></FaGithubAlt>
                  </Button>
                </a>
              </li>
              <li className="ml-4">
                <Button>
                  <FaLinkedinIn></FaLinkedinIn>
                </Button>
              </li>
              <li className="ml-4">
                <Button>
                  <HiOutlineDownload></HiOutlineDownload>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
