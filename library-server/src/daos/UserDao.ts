import mongoose, {Schema, Document} from 'mongoose';
import {IUser} from '../models/User';
 
export interface IUserModel extends IUser, Document {};

const UserSchema = new Schema(
    {
        type:{type:String, required:true },
        firstName:{type: String, required: true },
        lastName: {type:String, required: true },
        email: {type:String,required: true, unique:true },
        password:{type:String, required:true}
    },
    {
        versionKey: false 
    }
);
 
export default mongoose.model<IUserModel>('User', UserSchema);


// // import mongoose, { Schema, Document } from 'mongoose';
// // import { IUser } from '../models/User';

// // export interface IUserModel extends IUser, Document {};

// // const UserSchema = new Schema<IUserModel>(
// //   {
// //     type: { type: String, required: true },
// //     firstName: { type: String, required: true },
// //     lastName: { type: String, required: true },
// //     email: { type: String, required: true, unique: true },
// //     password: { type: String, required: true }
// //   },
// //   { versionKey: false }
// // );

// // const UserModel = mongoose.model<IUserModel>('User', UserSchema);

// // export default class UserDao {
// //   save(): IUserModel | PromiseLike<IUserModel> {
// //       throw new Error('Method not implemented.');
// //   }
// //   static findByIdAndUpdate(_id: unknown, user: IUserModel, arg2: { new: boolean; }) {
// //     throw new Error('Method not implemented.');
// //   }
// //   static findById: any;
// //   static find() {
// //     throw new Error('Method not implemented.');
// //   }
// //   static async create(user: IUser): Promise<IUserModel> {
// //     const newUser = new UserModel(user);
// //     return await newUser.save();
// //   }
// //   static async findOne(query: object): Promise<IUserModel | null> {
// //     return UserModel.findOne(query).exec();
// //   }
// // }

// // export default mongoose.model<IUserModel>('User', UserSchema);

// import mongoose, { Schema, Document } from 'mongoose';
// import { IUser } from '../models/User';

// export interface IUserModel extends IUser, Document {};

// const UserSchema = new Schema<IUserModel>(
//   {
//     type: { type: String, required: true },
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
//   },
//   { versionKey: false }
// );

// const UserModel = mongoose.model<IUserModel>('User', UserSchema);

// export default class UserDao {
//   save(): IUserModel | PromiseLike<IUserModel> {
//       throw new Error('Method not implemented.');
//   }

//   static async findByIdAndUpdate(_id: unknown, user: IUserModel, arg2: { new: boolean; }): Promise<IUserModel | null> {
//     return UserModel.findByIdAndUpdate(_id, user, arg2).exec();
//   }

//   static async findById(userId: string): Promise<IUserModel | null> {
//     return UserModel.findById(userId).exec();
//   }

//   static async find(): Promise<IUserModel[]> {
//     return UserModel.find().exec();
//   }

//   static async create(user: IUser): Promise<IUserModel> {
//     const newUser = new UserModel(user);
//     return await newUser.save();
//   }

//   static async findOne(query: object): Promise<IUserModel | null> {
//     return UserModel.findOne(query).exec();
//   }
// }

// export default UserModel;
