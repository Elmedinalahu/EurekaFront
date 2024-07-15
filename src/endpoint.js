import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;
const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
});
const currentUrl = window.location.href.toString().toLocaleLowerCase();
const isCarmax = () => {
  if (!currentUrl.includes("carmax-kos")) {
    instance.defaults.headers.common["Tenant"] =
      "27BA065D-AB2C-4440-ADCA-4DC955C1D1A2";
    return true;
  } else {
    instance.defaults.headers.common["Tenant"] =
      "3F7DA16E-229D-477B-97A0-4B5A0D55D088";
    return false;
  }
};
const webControls = {
  isCarmax: isCarmax(),
};
// LOGIN TOKEN
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);
async function refreshAccessToken() {
  try {
    //const t = localStorage.getItem("accessToken");
    //const refresh = localStorage.getItem("refreshToken");
    const response = await axios.post(`${baseURL}Tokens/refresh`, {
      refreshToken: localStorage.getItem("refreshToken"),
      token: localStorage.getItem("accessToken"),
    });
    localStorage.setItem("accessToken", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);
  } catch (err) {
    console.error(err);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
    throw err;
  }
}
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${localStorage.getItem(
          "accessToken"
        )}`;
        return instance(originalRequest);
      } catch (err) {
        console.error(err);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        // window.location.reload();
        throw err;
      }
    }
    return Promise.reject(error);
  }
);
// GET TOKEN
async function GetToken(tokenBody) {
  return instance.post("/Tokens/getToken", tokenBody).then((response) => {
    return Promise.resolve(response);
  });
}
// CLIENT AXIOS
async function ClientSearchBar(
  pageNumber = 1,
  name = "",
  status = "",
  createdDate = "",
  pageSize = null
) {
  return instance
    .get(
      `/Client/list?pageNumber=${pageNumber}&searchText=${name}&status=${status}&createdOn=${createdDate}&pageSize=${pageSize}`
    )
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function GetClientsDetails(clientDetailsId) {
  return instance
    .get(`/Client/getClientDetails?id=${clientDetailsId}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function UpdateClient(updateClientBody) {
  return instance
    .post(`/Client/updateClient`, updateClientBody)
    .then((response) => {
      return Promise.resolve(response);
    });
}

// CONTACT AXIOS
async function GetContactList(pageNumber = 1) {
  return instance
    .get(`/Contact/list?pageNumber=${pageNumber}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function GetContactDetails(contactClientId) {
  return instance
    .get(`/Contact/getMessageDetails?id=${contactClientId}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function DeleteComment(contactClientId) {
  return instance
    .post(`/Contact/deleteMessage?id=${contactClientId}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
// POST CATEGORY
async function GetPostCategories(pageNumber = 1, search = null) {
  return instance
    .get(
      `/PostCategory/getCategory/List?pageNumber=${pageNumber}&search=${search}`
    )
    .then((response) => {
      console.log(response);
      return Promise.resolve(response);
    });
}
async function AddCategoryAxios(addCategoryBody) {
  return instance
    .post("/PostCategory/newCategory", addCategoryBody)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function DeleteCategoryAxios(postCategoryId) {
  return instance
    .delete(`/PostCategory/deleteCategory?Id=${postCategoryId}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function GetCategoryDetails(categoryId) {
  return instance
    .get(`/PostCategory/getCategory/Details?id=${categoryId}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function UpdateCategory(updateCategoryBody) {
  return instance
    .post("/PostCategory/updateCategory", updateCategoryBody)
    .then((response) => {
      return Promise.resolve(response);
    });
}
// USERS AXIOS
async function GetCurrentUser() {
  return instance.get(`/Tokens/getCurrentUser`).then((response) => {
    return Promise.resolve(response);
  });
}
async function UserChangePassword(userChangePasswordBody) {
  return instance
    .post(`/User/change-password`, userChangePasswordBody)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function UserForgotPassword(email) {
  return instance
    .post(`/User/forgot-password?email=${email}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function ResetUserPassword(resetPasswordBody) {
  return instance
    .post("/User/reset-user-password", resetPasswordBody)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function GetUsers(pageNumber = 1, name = null, status = null) {
  return instance
    .get(`/User/list?pageNumber=${pageNumber}&name=${name}&status=${status}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function AddUserAxios(addUserBody) {
  return instance.post(`/User/addUser`, addUserBody).then((response) => {
    return Promise.resolve(response);
  });
}
async function GetUserDetails(userId) {
  return instance.get(`/User/getUserDetails?id=${userId}`).then((response) => {
    return Promise.resolve(response);
  });
}
async function UpdateUserDetails(updatedUserDetails) {
  return instance
    .post(`/User/updateProfile`, updatedUserDetails)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function DeleteUser(userId) {
  return instance.post(`/User/deleteUser?id=${userId}`).then((response) => {
    return Promise.resolve(response);
  });
}
async function CheckIfUserEmailExist(email) {
  return instance
    .get(`/User/checkIfUserEmailExists?email=${email}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
// APROVE & REFUSE AXIOS
async function AproveClient(clientId, maxOpenBids) {
  return instance
    .post(`/Client/aproveClient?id=${clientId}&maxOpenBids=${maxOpenBids}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function RefuseClient(clientId, message) {
  return instance
    .post(`/Client/refuseClient?id=${clientId}&message=${message}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
// ARVAL API
async function GetAppServices() {
  return instance.get(`/AppSettings/getAppServices`).then((response) => {
    return Promise.resolve(response);
  });
}
async function GetAppServiceDetails(name) {
  return instance
    .get(`/AppSettings/getAppSettingDetails?name=${name}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function UpdateAppService(updateAppServiceBody, name) {
  const body = {
    name: name,
    appSettings: updateAppServiceBody,
  };
  return instance
    .post(`/AppSettings/updateAppSettingValues`, body)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function GetCarsByStatusId(
  id,
  currentPage = 1,
  clientName = "",
  carName = "",
  fromDate = "",
  toDate = ""
) {
  return instance
    .get(
      `/ActiveAuction/ActiveAuctionCar/ByStatusId/CarListForAdmin?_statusId=${id}&_pageNumber=${currentPage}&_clientName=${clientName}&_carName=${carName}&_fromDate=${fromDate}&_toDate=${toDate}`
    )
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function ActiveAuctionCarDetails(id) {
  return instance
    .get(`/ActiveAuction/ActiveAuctionCarDetails?id=${id}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function GetConfirmedReceivedCarsByClientId(statusId, clientId) {
  return instance
    .get(
      `ActiveAuction/ClientCarList/ByStatusId/ClientCarListForAdmin?StatusId=${statusId}&ClientId=${clientId}`
    )
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function UpdateCarStatusId(carId) {
  return instance
    .post(
      `/ActiveAuction/Update/CarAuctionStatusId/ToReceived?CarAuctionId=${carId}`
    )
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function GetDashboardHeaderData() {
  return instance.get(`/Dashboard/GetGeneralDashboard`).then((response) => {
    return Promise.resolve(response);
  });
}

async function EditPriceListAxios(editPriceListBody) {
  return instance
    .post("/Pricelist/updatePricelist", editPriceListBody)
    .then((response) => {
      return Promise.resolve(response);
    });
}

function DownloadInvoice2(id) {
  window.location.href = `${baseURL}Invoices/InvoiceToPDF?id=${id}`;
}

async function DeleteInvoice(invoiceId) {
  return instance
    .post(`/Invoices/Delete/Invoice?id=${invoiceId}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}

/////MENUS

async function GetMenuList(languageId) {
  return instance
    .get(`/Menu/getMenu/List?languageId=${languageId}`)
    .then((response) => {
      console.log(response.data.menus);
      return Promise.resolve(response.data.menus);
    });
}
async function GetMenuDetails(menuId) {
  return instance.get(`Menu/getMenu/Details?id=${menuId}`).then((response) => {
    return Promise.resolve(response.data);
  });
}

async function GetMenuListLang(languageId) {
  return instance
    .get(`Menu/getMenu/ListLanguage?id=${languageId}`)
    .then((response) => {
      return Promise.resolve(response.data);
    });
}

async function AddMenuAxios(addMenuBody) {
  console.log("tek menu body", addMenuBody);
  return instance.post(`/Menu/newMenu`, addMenuBody).then((response) => {
    return Promise.resolve(response);
  });
}
async function UpdateMenu(updateBody) {
  return instance.post(`/Menu/updateMenu`, updateBody).then((response) => {
    return Promise.resolve(response.data);
  });
}
async function UpdateMenuVisibility(updateBody) {
  return instance
    .post(`/Menu/updateVisibility`, updateBody)
    .then((response) => {
      return Promise.resolve(response.data);
    });
}

async function UpdateMenuPositions(positionsBody) {
  return instance
    .post(`/Menu/updateMenuPositions`, positionsBody)
    .then((response) => {
      return Promise.resolve(response.data);
    });
}

async function UpdateMenuParentPositions(positionsBody) {
  return instance
    .post(`/Menu/updateMenuParentsPositions`, positionsBody)
    .then((response) => {
      return Promise.resolve(response.data);
    });
}
async function DeleteMenu(menuId) {
  return instance.delete(`Menu/deleteMenu?id=${menuId}`).then((response) => {
    return Promise.resolve(response);
  });
}

async function GetPageList() {
  return instance.get(`Page/getPage/List`).then((response) => {
    return Promise.resolve(response.data.pages);
  });
}

async function GetLanguageList() {
  return instance.get(`Language/getLanguage/List`).then((response) => {
    return Promise.resolve(response.data.languages);
  });
}

async function GetLanguageDetail(languageId) {
  return instance
    .get(`Language/getLanguage/Details?Id=${languageId}`)
    .then((response) => {
      return Promise.resolve(response.data);
    });
}

async function GetLanguageDefault() {
  return instance
    .get(`Language/getLanguage/Details?Id=6BA76AB2-F878-424D-8B2A-6179D0288257`)
    .then((response) => {
      return Promise.resolve(response.data);
    });
}

// FETCH PAGE
async function GetPaginatedPages(pageNumber = 1, search = null) {
  return instance
    .get(
      `Page/getPagePagination/List?pageNumber=${pageNumber}&search=${search}`
    )
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function GetPages(pageNumber = 1, search = null) {
  return instance.get(`/Page/getPage/List`).then((response) => {
    return Promise.resolve(response);
  });
}
async function AddPageAxios(addCategoryBody) {
  return instance.post("/Page/newPage", addCategoryBody).then((response) => {
    return Promise.resolve(response);
  });
}
async function DeletePageAxios(postCategoryId) {
  return instance
    .delete(`/Page/deletePage?Id=${postCategoryId}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function GetPageDetails(categoryId) {
  return instance
    .get(`/Page/getPage/Details?id=${categoryId}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function UpdatePageAxios(updateCategoryBody) {
  return instance
    .post("/Page/updatePage", updateCategoryBody)
    .then((response) => {
      return Promise.resolve(response);
    });
}

//FETCH POSTS
async function GetPosts(pageNumber = 1, search = null) {
  return instance
    .get(`/Post/getPost/List?pageNumber=${pageNumber}&search=${search}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function AddPostAxios(addPostBody) {
  return instance.post("/Post/newPost", addPostBody).then((response) => {
    return Promise.resolve(response);
  });
}
async function DeletePostAxios(postPostId) {
  return instance
    .delete(`/Post/deletePost?Id=${postPostId}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}
async function GetPostDetails(postId) {
  return instance.get(`/Post/getPost/Details?id=${postId}`).then((response) => {
    return Promise.resolve(response);
  });
}
async function UpdatePostAxios(updatePostBody) {
  return instance.post("/Post/updatePost", updatePostBody).then((response) => {
    return Promise.resolve(response);
  });
}

//// DOCUMENTS
async function UploadFileAxios(uploadFile) {
  try {
    return instance
      .post("/Document/Upload", uploadFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return Promise.resolve(response);
      });
  } catch (error) {
    console.error("Error uploading file:", error);
    return Promise.reject(error);
  }
}

async function GetDocumentsList() {
  return instance.get(`/Document/getDocument/List`).then((response) => {
    return Promise.resolve(response);
  });
}

//Document Category

async function GetDocumentCategory() {
  return instance
    .get(`/DocumentCategory/getDocumentCategory/List`)
    .then((response) => {
      return Promise.resolve(response);
    });
}

async function GetMenuDocumentCategory() {
  return instance
    .get(`/DocumentCategory/getMenuDocumentCategory/List`)
    .then((response) => {
      return Promise.resolve(response);
    });
}

async function GetDocumentCategoryList() {
  return instance
    .get(`/DocumentCategory/getDocumentCategory/List`)
    .then((response) => {
      return Promise.resolve(response);
    });
}

async function AddDocumentCategory(categoryBody) {
  return instance
    .post(`/DocumentCategory/newDocumentCategory`, categoryBody)
    .then((response) => {
      return Promise.resolve(response.data);
    });
}
async function GetDocumentCategoryByMenuId(menuId) {
  return instance
    .get(`/DocumentCategory/getMenuDocumentCategoryById/List?Id=${menuId}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}

async function GetPostCategoryByMenuId(menuId) {
  return instance
    .get(`/PostCategory/getMenuPostCategoryById/List?Id=${menuId}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}

async function DeleteDocumentCategory(id) {
  return instance
    .delete(`/DocumentCategory/deleteCategory?id=${id}`)
    .then((response) => {
      return Promise.resolve(response);
    });
}

async function UpdateDocumentCategory(updateCategory) {
  return instance
    .post(`/DocumentCategory/updateCategory`, updateCategory)
    .then((response) => {
      return Promise.resolve(response.data);
    });
}

export {
  GetToken,
  GetCurrentUser,
  UserChangePassword,
  UserForgotPassword,
  ResetUserPassword,
  GetClientsDetails,
  ClientSearchBar,
  UpdateClient,
  // GetCountries,
  GetContactList,
  GetContactDetails,
  DeleteComment,
  GetUsers,
  AddUserAxios,
  GetUserDetails,
  UpdateUserDetails,
  DeleteUser,
  CheckIfUserEmailExist,
  AproveClient,
  RefuseClient,
  GetAppServices,
  GetAppServiceDetails,
  UpdateAppService,
  GetCarsByStatusId,
  ActiveAuctionCarDetails,
  GetConfirmedReceivedCarsByClientId,
  UpdateCarStatusId,
  GetDashboardHeaderData,
  webControls,
  GetPaginatedPages,
  DeleteDocumentCategory,
  UpdateDocumentCategory,
  DownloadInvoice2,
  DeleteInvoice,
  GetPostCategories,
  AddCategoryAxios,
  EditPriceListAxios,
  DeleteCategoryAxios,
  GetCategoryDetails,
  UpdateCategory,
  GetPageList,
  GetLanguageList,
  AddMenuAxios,
  GetMenuList,
  UpdateMenu,
  UpdateMenuVisibility,
  UpdateMenuPositions,
  UpdateMenuParentPositions,
  DeleteMenu,
  GetMenuListLang,
  UploadFileAxios,
  GetLanguageDetail,
  GetLanguageDefault,
  GetPageDetails,
  GetPages,
  UpdatePageAxios,
  DeletePageAxios,
  AddPageAxios,
  GetPostDetails,
  GetPosts,
  UpdatePostAxios,
  DeletePostAxios,
  AddPostAxios,
  AddDocumentCategory,
  GetDocumentCategory,
  GetMenuDocumentCategory,
  GetDocumentCategoryByMenuId,
  GetPostCategoryByMenuId,
  GetDocumentsList,
  GetDocumentCategoryList,
};
