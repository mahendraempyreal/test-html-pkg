"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _image = _interopRequireDefault(require("next/image"));
var _noTask = _interopRequireDefault(require("../images/no-task.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function BlankTask(_ref) {
  let {
    tab
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "m-auto my-0 rounded-lg bg-white shadow-cardv2 p-4 ht-inherit"
  }, /*#__PURE__*/_react.default.createElement(_image.default, {
    width: 100,
    height: 100,
    src: _noTask.default,
    className: "w-auto mb-1 max-h-12 mx-auto mt-[40%]"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-white-whitest p-2 rounded-lg text-secondary-light1 font-normal text-xs text-center mx-auto my-2.5"
  }, tab === "status" ? "No visible tasks in the defined dates." : tab === "date" ? "No visible tasks in the defined dates." : tab === "service" ? "No visible tasks in the defined dates." : tab === "smartgroup" ? "You do not have tasks to be shown under the selected criteria." : tab === "client" ? "The Client does not have any tasks that are available to be showcased in the selected date range." : tab === "employee" ? "The user does not have any tasks that are available to be showcased." : "No Task"));
}
BlankTask.propTypes = {
  tab: _propTypes.default.string
};
BlankTask.defaultProps = {
  tab: "status"
};
var _default = exports.default = BlankTask;