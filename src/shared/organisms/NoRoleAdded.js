import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";

function NoRoleAdded({ redirectUrl }) {
  const handleRedirect = (url) => {
    Router.push(url);
  };

  return (
    <div className="sm:flex justify-center">
      <div className="pt-6 max-height mr-4 flow-root w-full sm:w-1/2">
        <div className="-my-5 divide-gray-200 mb-2 w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 dashboard-card-wrapper">
          <h1 className="app-heading-primary text-gray-100 font-bold text-center pt-5 text-2xl">
            No Role Added
          </h1>
          <div className="text-center app-heading-secondary text-gray-100 text-base font-medium pt-5">
            No roles are added! Click on the button below in order to add a new
            role. Customize your team's access and responsibilities by selecting
            the desired roles to meet your unique business requirements.
          </div>
          <div className="flex justify-center pt-10 pb-6">
            <button
              className="app-btn app-btn-primary px-8"
              type="submit"
              data-testid="submit"
              onClick={() => handleRedirect(redirectUrl)}
            >
              <span className="app-heading-primary text-sm">Add New Role</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

NoRoleAdded.propTypes = {
  redirectUrl: PropTypes.string,
};

NoRoleAdded.defaultProps = {
  redirectUrl: "/role/add",
};

export default NoRoleAdded;
