import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import NoTaskImg from "../images/no-task.png";

function BlankTask({ tab }) {
  return (
    <div className="m-auto my-0 rounded-lg bg-white shadow-cardv2 p-4 ht-inherit">
      <Image
        width={100}
        height={100}
        src={NoTaskImg}
        className="w-auto mb-1 max-h-12 mx-auto mt-[40%]"
      />
      <div className="bg-white-whitest p-2 rounded-lg text-secondary-light1 font-normal text-xs text-center mx-auto my-2.5">
        {tab === "status"
          ? "No visible tasks in the defined dates."
          : tab === "date"
          ? "No visible tasks in the defined dates."
          : tab === "service"
          ? "No visible tasks in the defined dates."
          : tab === "smartgroup"
          ? "You do not have tasks to be shown under the selected criteria."
          : tab === "client"
          ? "The Client does not have any tasks that are available to be showcased in the selected date range."
          : tab === "employee"
          ? "The user does not have any tasks that are available to be showcased."
          : "No Task"}
      </div>
    </div>
  );
}

BlankTask.propTypes = {
  tab: PropTypes.string,
};

BlankTask.defaultProps = {
  tab: "status",
};

export default BlankTask;
