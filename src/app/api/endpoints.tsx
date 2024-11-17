const api = {
  getLoggedUserData: "/api/login-logout/get-logged-user-data",
  readCountSummary: "/api/read-count-summary",
  readMyAllAccess: "/api/read-my-all-access",

  readAllDepartment: "/api/read-all-department",
  readAllProgram: "/api/read-all-program",

  createUser: "/api/users/create-user",
  updateUser: "/api/users/update-user",
  deleteUser: "/api/users/delete-user/",
  readAUserInfo: "/api/users/read-a-user-info/",
  readAllTeachersData: "/api/users/read-all-teachers-data",
  readAllStudentsData: "/api/users/read-all-students-data",
  readAllOtherUsersData: "/api/users/read-all-other-users-data",

  readFacultyDeptProgramData: "/api/faculty/read-faculty-dept-program-data",
  addChairman: "/api/faculty/add-chairman",
  removeChairman: "/api/faculty/remove-chairman/",
  searchChairman: "/api/faculty/search-chairman/",
  deleteFaculty: "/api/faculty/delete-faculty/",
  deleteDepartment: "/api/faculty/delete-department/",
  deleteProgram: "/api/faculty/delete-program/",
  saveUpdatedFacultyTableData: "/api/faculty/save-updated-table-data",

  saveUpdatedSessionTableData: "/api/session/save-updated-table-data",
  readAllSession: "/api/session/read-all",
  readASession: "/api/session/read-one/",
  deleteSession: "/api/session/delete/",
  switchMuteUnmute: "/api/session/switch-mute-unmute/",

  readAllUsersAccess: "/api/access/read-all-user-access",
  updateAccess: "/api/access/update-access",

  readAllHistory: "/api/history/read-all-history",
  deleteHistory: "/api/history/delete/",
};

export default api;
