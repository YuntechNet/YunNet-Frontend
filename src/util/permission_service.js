import JwtService from "@/util/jwt_service";

const PermissionService = {
  init() {
    let token = JwtService.getToken().split(".", 3);
    return JSON.parse(atob(token[1]));
  },
  Check(str) {
    let token = PermissionService.init();
    if (token.permission.indexOf(str) != -1) return true;
    else return false;
  }
};

export default PermissionService;
 