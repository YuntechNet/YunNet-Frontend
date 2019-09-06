import { SET_ERROR, PURGE_AUTH } from "@/store/mutations_type";
import router from "@/router";

const ErrorService = {
  init(status, message, context) {
    if ((status === 401) & (message === "NO_PERMISSION")) {
      router.replace({ name: "Index" });
    }
    if ((status === 404) & (message === "INVALID_ENDPOINT")) {
      router.replace({ name: "Index" });
    }
    if ((status === 401) & (message === "INVALID_SESSION")) {
      context.commit(PURGE_AUTH);
      router.replace({ name: "Login" });
      if ((navigator.language || navigator.userLanguage) === "zh-TW") {
        context.commit(SET_ERROR, "瀏覽階段無效 請重新登入!");
      } else {
        context.commit(SET_ERROR, ErrorService.format(message));
      }
    }
    if ((status === 401) & (message === "SESSION_EXPIRED")) {
      context.commit(PURGE_AUTH);
      router.replace({ name: "Login" });
      if ((navigator.language || navigator.userLanguage) === "zh-TW") {
        context.commit(SET_ERROR, "瀏覽階段過期 請重新登入!");
      } else {
        context.commit(SET_ERROR, ErrorService.format(message));
      }
    }
    if ((status === 405, message === "METHOD_NOT_SUPPORTED")) {
      router.replace({ name: "Index" });
    }
    if ((status === 400) & (message === "NOT_REGISTERED")) {
      if ((navigator.language || navigator.userLanguage) === "zh-TW") {
        context.commit(SET_ERROR, "未註冊");
      } else {
        context.commit(SET_ERROR, ErrorService.format(message));
      }
    }
    if (
      (status === 500) |
      (status === 502) |
      (message === "INTERNAL_SERVER_ERROR")
    ) {
      router.replace({ name: "Index" });
      if ((navigator.language || navigator.userLanguage) === "zh-TW") {
        context.commit(SET_ERROR, "內部伺服器錯誤");
      } else {
        context.commit(SET_ERROR, ErrorService.format(message));
      }
    }
    if ((status === 401) & (message === "LOGIN_FAILED")) {
      if ((navigator.language || navigator.userLanguage) === "zh-TW") {
        context.commit(SET_ERROR, ErrorService.format(message));
        context.commit(SET_ERROR, "帳號或密碼錯誤");
      } else {
        context.commit(SET_ERROR, ErrorService.format(message));
      }
    }
    if ((status === 401) & (message === "RECAPTCHA_FAILED")) {
      if ((navigator.language || navigator.userLanguage) === "zh-TW") {
        context.commit(SET_ERROR, "RECAPTCHA認證失敗");
      } else {
        context.commit(SET_ERROR, ErrorService.format(message));
      }
    }
    if ((status === 400) & (message === "REGISTER_FAILED")) {
      if ((navigator.language || navigator.userLanguage) === "zh-TW") {
        context.commit(SET_ERROR, "註冊失敗");
      } else {
        context.commit(SET_ERROR, ErrorService.format(message));
      }
    }
    if ((status === 400) & (message === "NOT_REGISTERED")) {
      if ((navigator.language || navigator.userLanguage) === "zh-TW") {
        context.commit(SET_ERROR, "未註冊");
      } else {
        context.commit(SET_ERROR, ErrorService.format(message));
      }
    }
    if ((status === 400) & (message === "ALREADY_REGISTERED")) {
      if ((navigator.language || navigator.userLanguage) === "zh-TW") {
        context.commit(SET_ERROR, "已註冊");
      } else {
        context.commit(SET_ERROR, ErrorService.format(message));
      }
    }
    if ((status === 410) & (message === "TOKEN_EXPIRED")) {
      router.replace({ name: "Index" });
      if ((navigator.language || navigator.userLanguage) === "zh-TW") {
        context.commit(SET_ERROR, "認證失敗");
      } else {
        context.commit(SET_ERROR, ErrorService.format(message));
      }
    }
    if ((status === 401) & (message === "INVALID_TOKEN")) {
      router.replace({ name: "Index" });
      if ((navigator.language || navigator.userLanguage) === "zh-TW") {
        context.commit(SET_ERROR, "認證無效");
      } else {
        context.commit(SET_ERROR, ErrorService.format(message));
      }
    }
    if ((status === 400) & (message === "INVALID_MAC")) {
      if ((navigator.language || navigator.userLanguage) === "zh-TW") {
        context.commit(SET_ERROR, "MAC無效");
      } else {
        context.commit(SET_ERROR, ErrorService.format(message));
      }
    }
    if ((status === 400) & (message === "USER_ALREADY_EXIST")) {
      context.commit(SET_ERROR, "帳號已存在");
    }
    if ((status === 400) & (message === "USER_NOT_EXIST")) {
      context.commit(SET_ERROR, "帳號不存在");
    }
    if ((status === 400) & (message === "BAD_REQUEST")) {
      context.commit(SET_ERROR, "請求失敗");
    }
  },
  format(message) {
    return message
      .toLowerCase()
      .replace(/^./, message[0].toUpperCase())
      .replace(/_+/g, " ");
  }
};
export default ErrorService;
