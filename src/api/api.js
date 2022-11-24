import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "329978c3-f4c4-425d-a125-09b8b8cb0b88",
  },
});

export const usersAPI = {
  getUsers(pageSize = 15, currentPage = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`, {
        withCredentials: true,
      })
      .then((response) => response.data);
  },
  setAuth() {
    return instance.get(`auth/me`);
  },
  setFollow(id) {
    return instance.post(`follow/${id}`);
  },
  setUnfollow(id) {
    return instance.delete(`follow/${id}`);
  },
  setUserInProfilePage(profileId) {
    console.warn("Obsolete method. Please profileAPI object");
    return profileAPI.getProfile(profileId);
  },
};

export const profileAPI = {
  getProfile(profileId) {
    return instance.get(`profile/${profileId}`);
  },
  getStatus(status) {
    return instance.get(`profile/status/${status}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};
