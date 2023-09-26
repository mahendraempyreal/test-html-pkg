/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";

function ConfirmCancel({
  handleCancelFinal,
  open,
  setOpen,
  name,
  noBtnText,
  yesBtnText,
}) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Cancel {name}?
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to proceed with cancel?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 pb-6 p-6 flex justify-end space-x-4 delete-emp-model">
                  <button
                    className="app-btn app-btn-secondary px-8 border-secondary text-secondary"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    <span className="app-heading-primary text-sm">
                      {noBtnText}
                    </span>
                  </button>
                  <button
                    className="app-btn app-btn-primary px-8"
                    type="submit"
                    data-testid="submit"
                    onClick={handleCancelFinal}
                  >
                    <span className="app-heading-primary text-sm">
                      {yesBtnText}
                    </span>
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

ConfirmCancel.propTypes = {
  handleCancelFinal: PropTypes.func,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  name: PropTypes.string,
  noBtnText: PropTypes.string,
  yesBtnText: PropTypes.string,
};

ConfirmCancel.defaultProps = {
  handleCancelFinal: () => {},
  open: false,
  setOpen: () => {},
  name: "",
  noBtnText: "No",
  yesBtnText: "Yes, Cancel",
};

export default ConfirmCancel;
