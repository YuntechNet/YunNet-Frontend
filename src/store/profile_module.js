import ApiService from "@/util/api_service";
import JwtService from "@/util/jwt_service";
import ErrorService from "@/util/error_service";
import {
  INFO,
  IP,
  CHANGE_MAC,
  CHANGE_PASSWORD,
  NETFLOW_USER,
  LOCK,
  WAN_DOWN,
  USER_LOG
} from "./actions_type";
import {
  SET_INFO,
  PURGE_AUTH,
  SET_ERROR,
  SET_INFO_IP,
  SET_NETFLOW,
  SET_LOCK,
  ADD_WAN_DOWN,
  SET_SYSTEM_LOG
} from "./mutations_type";
import router from "@/router";

const state = {
  info: [],
  info_IP: [],
  netflow: [],
  lock: [{}],
  wan: []
};

const actions = {
  [INFO](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      const username = JwtService.getUsername();
      return new Promise(resolve => {
        ApiService.get("user", username)
          .then(({ data }) => {
            context.commit(SET_INFO, data);
            resolve(data);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  },
  [IP](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      const username = JwtService.getUsername();
      return new Promise(resolve => {
        ApiService.get_pure(`user/${username}/ip`)
          .then(({ data }) => {
            context.commit(SET_INFO_IP, data);
            if (typeof data[0] !== "undefined") {
              if ((data.length === 1) & (data[0].mac === null)) {
                router.push({ path: `/change_mac/${data[0].ip}` });
                ErrorService.init(200, "請先設定MAC卡號!", context);
              }
            }
            resolve(data);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  },
  [CHANGE_MAC](context, credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      const username = JwtService.getUsername();
      return new Promise(resolve => {
        ApiService.patch(`user/${username}/${credentials.ip}/mac`, {
          mac: credentials.mac
        })
          .then(({ data }) => {
            router.replace({ name: "Index" });
            context.commit(SET_ERROR, data.message);
            resolve(data);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  },
  [CHANGE_PASSWORD](context, credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      const username = JwtService.getUsername();
      return new Promise(resolve => {
        ApiService.patch(`user/${username}/password`, credentials)
          .then(({ data }) => {
            context.commit(PURGE_AUTH);
            router.replace({ name: "Index" });
            context.commit(SET_ERROR, data.message);
            resolve(data);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  },
  [NETFLOW_USER](context, credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise(resolve => {
        ApiService.get("netflow", credentials)
          .then(({ data }) => {
            context.commit(SET_NETFLOW, data);
            resolve(data);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  },
  [WAN_DOWN](context) {
    context.state.info_IP.forEach((element, index) => {
      ApiService.get("netflow", element.ip).then(({ data }) => {
        context.commit(ADD_WAN_DOWN, [data, index]);
      });
    });
  },
  [LOCK](context, credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      const username = JwtService.getUsername();
      return new Promise(resolve => {
        ApiService.get_pure(`user/${username}/${credentials}/lock`)
          .then(({ data }) => {
            context.commit(SET_LOCK, data);
            resolve(data);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  },
  [USER_LOG](context, credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise(resolve => {
        ApiService.get("/log/actions", credentials)
          .then(response => {
            context.commit(SET_SYSTEM_LOG, [response]);
            resolve(response);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  }
};

const mutations = {
  [SET_INFO](state, info) {
    state.info = info;
  },
  [SET_INFO_IP](state, info_IP) {
    state.info_IP = info_IP;
  },
  [SET_NETFLOW](state, netflow) {
    state.netflow = netflow;
  },
  [SET_LOCK](state, lock) {
    if (lock.length != 0) {
      state.lock = lock;
    } else {
      state.lock[0] = { unlock_date: null, lock_id: null };
    }
  },
  [ADD_WAN_DOWN](state, data) {
    let all = data[0].netflow[0].wan_download + data[0].netflow[0].wan_upload;
    state.wan[data[1]] = all;
  }
};

export default {
  state,
  actions,
  mutations
};
