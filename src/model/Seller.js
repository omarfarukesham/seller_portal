import { BankInfo } from './BankInfo';

class Seller {
  constructor(data) {
    this.serial = data.serial;
    this.status = data.status;
    this.id = data.id;
    this.users = (data.users || []).map((user) => ({
      userId: user.userId,
      userName: user.userName,
      userFullName: user.userFullName,
    }));
    this.authorizedPerson = data.authorizedPerson
      ? {
          nid: data.authorizedPerson.nid,
          name: data.authorizedPerson.name,
          telephone: data.authorizedPerson.telephone,
          mobile: data.authorizedPerson.mobile,
          email: data.authorizedPerson.email,
        }
      : null;
    this.bankInfo = data.bankInfo ? new BankInfo(data.bankInfo) : null;
    this.paymentMethodName = data.paymentMethodName;
    this.marketCode = data.marketCode;
    this.profileStatus = data.profileStatus;
    this.profileStatusMessage = data.profileStatusMessage;
    this.billingAddress = data.billingAddress;
    this.shippingAddress = data.shippingAddress;
    this.warehouseAddress = data.warehouseAddress;
    this.storeName = data.storeName;
    this.storeDisplayName = data.storeDisplayName;
    this.logo = data.logo;
    this.bannerImage = data.bannerImage;
    this.shopTypeHierarchy = data.shopTypeHierarchy
      ? {
          idHierarchy: data.shopTypeHierarchy.idHierarchy,
          nameHierarchy: data.shopTypeHierarchy.nameHierarchy,
        }
      : null;
    this.shopTypeCategoryId = data.shopTypeCategoryId;
    this.description = data.description;
    this.bizInfo = data.bizInfo;
    this.bizDoc = data.bizDoc;
  }
}

export default Seller;
