import ApiService from "@/util/api_service";
import JwtService from "@/util/jwt_service";
import ErrorService from "@/util/error_service";
import router from "@/router";
import {
  SYSTEM_QUERY,
  SYSTEM_CLEAR,
  SYSTEM_ABUSE,
  SYSTEM_UNLOCK,
  SYSTEM_LOCK_TABLE,
  SYSTEM_CHANGE_BED,
  SYSTEM_FILLIN_BED,
  SYSTEM_DELETE_BED,
  SYSTEM_IP_LOG,
  SYSTEM_ALL_LOG
} from "./actions_type";
import {
  SET_QUERY,
  SET_SYSTEM_LOCK,
  PURGE_SYSTEM,
  SET_ERROR,
  SET_SYSTEM_LOG
} from "./mutations_type";

const state = {
  info: { user: [{}], ip: [] },
  netflow: [],
  lock: [],
  wan: [],
  log: []
};

const actions = {
  [SYSTEM_QUERY](context, username) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise(resolve => {
        ApiService.get_pure(`/management/user/${username}`)
          .then(({ data }) => {
            context.commit(SET_QUERY, data);
            resolve(data);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  },
  [SYSTEM_ABUSE](context, credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise(resolve => {
        ApiService.put(`/management/abuse/${credentials.ip}`, {
          lock_until: credentials.datenow,
          description: credentials.reason,
          title: credentials.title
        })
          .then(({ data }) => {
            router.replace({ name: "System_query" });
            context.commit(SET_ERROR, data.message);
            resolve(data);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  },
  [SYSTEM_UNLOCK](context, data) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      if (data.date != null) {
        return new Promise(resolve => {
          ApiService.delete(`/management/abuse/${data.ip}`, {
            unlock_date: data.date
          })
            .then(({ data }) => {
              router.go({ name: "System_query" });
              context.commit(SET_ERROR, data.message);
              resolve(data);
            })
            .catch(({ response }) => {
              ErrorService.init(
                response.status,
                response.data.message,
                context
              );
            });
        });
      } else {
        return new Promise(resolve => {
          ApiService.delete(`/management/abuse/${data.ip}`)
            .then(({ data }) => {
              router.go({ name: "System_query" });
              context.commit(SET_ERROR, data.message);
              resolve(data);
            })
            .catch(({ response }) => {
              ErrorService.init(
                response.status,
                response.data.message,
                context
              );
            });
        });
      }
    }
  },
  [SYSTEM_LOCK_TABLE](context, ip) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise(resolve => {
        ApiService.get_pure(`/management/user/${ip}/lock`)
          .then(({ data }) => {
            context.commit(SET_SYSTEM_LOCK, data);
            resolve(data);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  },
  [SYSTEM_CHANGE_BED](context, credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise(resolve => {
        ApiService.put("/management/bed-change", credentials)
          .then(({ data }) => {
            context.commit(SET_ERROR, data.message);
            resolve(data);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  },
  [SYSTEM_FILLIN_BED](context, credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise(resolve => {
        ApiService.post("/management/bed-change", credentials)
          .then(({ data }) => {
            context.commit(SET_ERROR, data.message);
            resolve(data);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  },
  [SYSTEM_DELETE_BED](context, credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise(resolve => {
        ApiService.delete(`/management/bed-change/${credentials}`)
          .then(({ data }) => {
            context.commit(SET_ERROR, data.message);
            resolve(data);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  },
  [SYSTEM_IP_LOG](context, credentials) {
    if (JwtService.getToken()) {
      return new Promise(resolve => {
        const lock = ApiService.get("/log/ip/lock", credentials);
        const mac = ApiService.get("/log/ip/mac", credentials);
        ApiService.all([lock, mac])
          .then(response => {
            context.commit(SET_SYSTEM_LOG, response);
            resolve(response);
          })
          .catch(() => {
            router.replace({ name: "Index" });
          });
      });
    }
  },
  [SYSTEM_ALL_LOG](context, credentials) {
    if (JwtService.getToken()) {
      return new Promise(resolve => {
        const lock = ApiService.get("/log/lock", credentials);
        const mac = ApiService.get("/log/mac", credentials);
        const action = ApiService.get("/log/actions", credentials);
        ApiService.all([lock, mac, action])
          .then(response => {
            context.commit(SET_SYSTEM_LOG, response);
            resolve(response);
          })
          .catch(() => {
            router.replace({ name: "Index" });
          });
      });
    }
  },
  [SYSTEM_CLEAR](context) {
    context.commit(PURGE_SYSTEM);
  }
};

const mutations = {
  [SET_QUERY](state, info) {
    state.info = info;
  },
  [SET_SYSTEM_LOCK](state, lock) {
    state.lock = lock;
  },
  [PURGE_SYSTEM](state) {
    state.info = { user: [], ip: [] };
  },
  [SET_SYSTEM_LOG](state, row) {
    state.log = [];
    row.forEach(item => {
      if (item.data !== null) state.log.push(item.data.reverse());
      else state.log.push([]);
    });
  }
};

export default {
  state,
  actions,
  mutations
};
