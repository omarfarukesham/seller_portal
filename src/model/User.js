import { PROFILE_AVATAR } from '@/configuration/resources';
import Seller from './Seller';
import UserRole from './UserRole';

class User {
  constructor(data) {
    this.name = data.userFullName;
    this.username = data.username;
    this.email = data.email;
    this.phone = data.phone;
    this.isVerified = data.isVerified;
    this.image = PROFILE_AVATAR;
    this.userType = data.userType;
    this.role = new UserRole({ name: 'Admin', appMenu: data.appMenu || [] });
    this.sellerInfo = data.sellerInfo ? new Seller(data.sellerInfo) : null;
    this.token = data.token;
  }
}

export default User;
