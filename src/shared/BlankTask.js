import React from "react";
import PropTypes from "prop-types";

function BlankTask({ tab }) {
  return (
    <div className="m-auto my-0 rounded-lg bg-white shadow-cardv2 p-4 ht-inherit">
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
