"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = require("@headlessui/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* This example requires Tailwind CSS v2.0+ */

function ConfirmCancel(_ref) {
  let {
    handleCancelFinal,
    open,
    setOpen,
    name,
    noBtnText,
    yesBtnText
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react2.Transition.Root, {
    show: open,
    as: _react.Fragment
  }, /*#__PURE__*/_react.default.createElement(_react2.Dialog, {
    as: "div",
    className: "relative z-10",
    onClose: setOpen
  }, /*#__PURE__*/_react.default.createElement(_react2.Transition.Child, {
    as: _react.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "fixed z-10 inset-0 overflow-y-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
  }, /*#__PURE__*/_react.default.createElement(_react2.Transition.Child, {
    as: _react.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sm:flex sm:items-start"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
  }, /*#__PURE__*/_react.default.createElement(_react2.Dialog.Title, {
    as: "h3",
    className: "text-lg leading-6 font-medium text-gray-900"
  }, "Cancel ", name, "?"), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text-sm text-gray-500"
  }, "Are you sure you want to proceed with cancel?"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-3 pb-6 p-6 flex justify-end space-x-4 delete-emp-model"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "app-btn app-btn-secondary px-8 border-secondary text-secondary",
    type: "button",
    onClick: () => setOpen(false)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "app-heading-primary text-sm"
  }, noBtnText)), /*#__PURE__*/_react.default.createElement("button", {
    className: "app-btn app-btn-primary px-8",
    type: "submit",
    "data-testid": "submit",
    onClick: handleCancelFinal
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "app-heading-primary text-sm"
  }, yesBtnText)))))))));
}
ConfirmCancel.propTypes = {
  handleCancelFinal: _propTypes.default.func,
  open: _propTypes.default.bool,
  setOpen: _propTypes.default.func,
  name: _propTypes.default.string,
  noBtnText: _propTypes.default.string,
  yesBtnText: _propTypes.default.string
};
ConfirmCancel.defaultProps = {
  handleCancelFinal: () => {},
  open: false,
  setOpen: () => {},
  name: "",
  noBtnText: "No",
  yesBtnText: "Yes, Cancel"
};
var _default = exports.default = ConfirmCancel;