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
      context.commit(SET_ERROR, "瀏覽階段無效 請重新登入!");
    }
    if ((status === 401) & (message === "SESSION_EXPIRED")) {
      context.commit(PURGE_AUTH);
      router.replace({ name: "Login" });
      context.commit(SET_ERROR, "瀏覽階段過期 請重新登入!");
    }
    if ((status === 405, message === "METHOD_NOT_SUPPORTED")) {
      router.replace({ name: "Index" });
    }
    if ((status === 400) & (message === "NOT_REGISTERED")) {
      context.commit(SET_ERROR, "未註冊");
    }
    if (
      (status === 500) |
      (status === 502) |
      (message === "INTERNAL_SERVER_ERROR")
    ) {
      router.replace({ name: "Index" });
      context.commit(SET_ERROR, "內部伺服器錯誤");
    }
    if ((status === 401) & (message === "LOGIN_FAILED")) {
      context.commit(SET_ERROR, "帳號或密碼錯誤");
    }
    if ((status === 401) & (message === "RECAPTCHA_FAILED")) {
      context.commit(SET_ERROR, "RECAPTCHA認證失敗");
    }
    if ((status === 400) & (message === "REGISTER_FAILED")) {
      context.commit(SET_ERROR, "註冊失敗");
    }
    if ((status === 400) & (message === "NOT_REGISTERED")) {
      context.commit(SET_ERROR, "未註冊");
    }
    if ((status === 400) & (message === "ALREADY_REGISTERED")) {
      context.commit(SET_ERROR, "已註冊");
    }
    if ((status === 410) & (message === "TOKEN_EXPIRED")) {
      router.replace({ name: "Index" });
      context.commit(SET_ERROR, "認證失敗");
    }
    if ((status === 401) & (message === "INVALID_TOKEN")) {
      router.replace({ name: "Index" });
      context.commit(SET_ERROR, "認證無效");
    }
    if ((status === 400) & (message === "INVALID_MAC")) {
      context.commit(SET_ERROR, "MAC無效");
    }
  }
};
export default ErrorService;
