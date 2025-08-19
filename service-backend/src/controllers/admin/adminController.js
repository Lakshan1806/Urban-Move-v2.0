import adminAuthController from "./account/adminAccount/adminAuthController.js";
import adminAccountManagementController from "./account/adminAccount/adminAccountManagementController.js";
import customerAccountManagementController from "./account/customerAccount/customerAccountManagementController.js";
import carManagementController from "./car/carManagementController.js";
import driverAccountManagementController from "./account/driverAccount/driverAccountManagementController.js";
import promoManagementController from "./promotion/promoManagementController.js";

const adminController = {
  auth: adminAuthController,
  admin: adminAccountManagementController,
  customer: customerAccountManagementController,
  driver: driverAccountManagementController,
  car: carManagementController,
  promotion: promoManagementController,
};

export default adminController;
