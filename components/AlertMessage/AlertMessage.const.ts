import { Status } from "./AlertMessage.types";

export const statusses = {
  error: "error",
  success: "success",
  info: "info",
};

export const pickSeverity = (status: Status) => {
  switch (status) {
    case statusses.error:
      return "error";
    case statusses.success:
      return "success";
    case statusses.info:
      return "warning";
    default:
      return "error";
  }
};

export const emptyMessageState = {
  text: "",
  type: null,
};
