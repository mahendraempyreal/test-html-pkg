"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _router = _interopRequireDefault(require("next/router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function NoRoleAdded(_ref) {
  var redirectUrl = _ref.redirectUrl;
  var handleRedirect = function handleRedirect(url) {
    _router["default"].push(url);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sm:flex justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "pt-6 max-height mr-4 flow-root w-full sm:w-1/2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "-my-5 divide-gray-200 mb-2 w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 dashboard-card-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "app-heading-primary text-gray-100 font-bold text-center pt-5 text-2xl"
  }, "No Role Added"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center app-heading-secondary text-gray-100 text-base font-medium pt-5"
  }, "No roles are added! Click on the button below in order to add a new role. Customize your team's access and responsibilities by selecting the desired roles to meet your unique business requirements."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center pt-10 pb-6"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "app-btn app-btn-primary px-8",
    type: "submit",
    "data-testid": "submit",
    onClick: function onClick() {
      return handleRedirect(redirectUrl);
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "app-heading-primary text-sm"
  }, "Add New Role"))))));
}
NoRoleAdded.propTypes = {
  redirectUrl: _propTypes["default"].string
};
NoRoleAdded.defaultProps = {
  redirectUrl: "/role/add"
};
var _default = exports["default"] = NoRoleAdded;