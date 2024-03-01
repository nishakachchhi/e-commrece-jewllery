import React, { useState } from "react";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";
import { Link } from "react-router-dom";

function Team() {
  const teamMember = [
    {
      id: 1,
      name: "john hossain",
      post: "CEO & founder",
      img: "asset/img/team-1.jpg",
    },
    {
      id: 2,
      name: "merry",
      post: "designer",
      img: "asset/img/team-2.jpg",
    },
    {
      id: 3,
      name: "robert",
      post: "customer service",
      img: "asset/img/team-3.jpg",
    },
    {
      id: 4,
      name: "melisa",
      post: "designer",
      img: "asset/img/team-4.jpg",
    },
  ];
  const [teams, setTeams] = useState(teamMember);
  return (
    <>
      <div className="container-fluid">
        <h4 className="about-h4 text-center fw-bold">OUR TEAM</h4>
        <div className="row py-5">
          {teams.map((team) => {
            const { id, name, post, img } = team;
            return (
              <>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12 px-4">
                  <div className="team-box">
                    <div className="overflow-hidden" key={id}>
                      <img src={img} className="w-100 overflow-hidden" alt="" />
                    </div>
                    <div className="team-body text-center py-3">
                      <h4 className="text-capitalize team-name">{name}</h4>
                      <span className="text-uppercase team-post ">{post}</span>
                      <div className="pt-2">
                        <span to="#" className="px-3 fs-4">
                          <LuFacebook />
                        </span>
                        <span to="#" className="px-3 fs-4">
                          <FiTwitter />
                        </span>
                        <span to="#" className="px-3 fs-4">
                          <FiInstagram />
                        </span>
                        <span to="#" className="px-3 fs-4">
                          <ImPinterest2 />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Team;
