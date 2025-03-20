import React from "react";
import Modal from "./Modal";
import { baseUrl } from "/src/stores/BaseStore";

function Badge({ badge }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="flex flex-col gap-2 items-center"
      >
        <img
          src={`${baseUrl}/${badge.image}`}
          alt=""
          className="h-12 min-w-12 bg-gray-50 rounded-full flex items-center justify-center mt-2"
        />{" "}
        <div className="text-xs text-gray-600">{badge.name}</div>
      </div>

      <Modal isOpen={isModalOpen}>
        <div className="p-5 flex items-center justify-center flex-col gap-5 mt-25 h-full">
          <img
            src={`${baseUrl}/${badge.image}`}
            alt=""
            className="h-20 min-w-20 bg-gray-50 rounded-full flex items-center justify-center mt-15"
          />
          <div className="text-gray-300">Achieved at 20.10.2021</div>
          <div className="text-gray-500 mt-5 mb-auto">{badge?.description}</div>
          <div
            className="bg-primary text-white h-13 w-full rounded-full flex justify-center items-center"
            onClick={() => setIsModalOpen(false)}
          >
            Schliessen
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Badge;
