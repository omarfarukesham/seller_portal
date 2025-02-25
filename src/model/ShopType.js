class ShopType {
  constructor(data) {
    this.status = data.status;
    this.serial = data.serial;
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.shopTypeId = data.shopTypeId;
    this.shopTypeParentId = data.shopTypeParentId;
    this.shopTypeParentName = data.shopTypeParentName;
  }
}

export default ShopType;
